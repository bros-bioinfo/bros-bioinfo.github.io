# -*- tcl -*-
# Time-stamp: 2012-12-17 23:00:07 rozen>

# gui_python_support.py - procedures for generating Python support
# module skeletons for associated GUI definition.  It is a stripped
# down version of python_ui.tcl.  Basically, what it does is to run
# thru the widgets looking for function and Tk variable names which are
# of the form "<module name>.<function name> or "<module
# name>.<variable name>. It keeps a list of the module names and
# raises an error message if there is not exactly one. It overlooks names of the form "self.<function name>" and handles callback functions containing "lambda:"

# Copyright (C) 2013-2017 Donald P. Rozenberg

# vTcl:generate_support
# vTcl:python_menu_support
# vTcl:python_inspect_config
# vTcl:python_inspect_bind
# vTcl:python_inspect_menu_config
# vTcl:python_inspect_widget
# vTcl:test_file_content
# vTcl:save_python_file
# vTcl:update_dialog
# vTcl:update_support_module
# vTcl:analyze_existing_support_module
# vTcl:gen_updated_source
# vTcl:scan_widgets
# vTcl:python_inspect_popup


proc vTcl:generate_python_support {} {
    # Starting routine. it is called from the Gen_Python submenu.
    global vTcl env
    set window $vTcl(tops)
    set vTcl(toplevel_menu_header) ""

    # See if there is anything to generate.
    if {$window == ""} {
        # There is nothing to generate.
        #tk_messageBox -title Error -message "There is no GUI to process."
        tk_dialog .foo "ERROR" "There is no GUI to process." error 0 "OK"
        return
    }
    if {![info exists vTcl($window,x)]} {
        vTcl:active_widget $window
    }
    set class [$window cget -class]
    if {$class == "Toplevel"} {
        set menu [$window cget -menu]
        set vTcl(toplevel_menu) $menu
    }
    set vTcl(py_title) [wm title $window]
    set vTcl(py_classname) [string map { " " _ } $vTcl(py_title) ]
#    set t [file tail $vTcl(project,file)]
#    set vTcl(import_name) [file rootname $t]_support

    # If there is something already in the the source window and it
    # was code for the GUI module and it was not saved, see if user
    # wants to save it. 11-4-14
    # if {[info exists vTcl(python_module)] && $vTcl(python_module) == "GUI"} {
    #     set base .vTcl.gui_console
    #     vTcl:check_upon_close_button  $base
    # }        ;# Rozen removed 1/7/16
    vTcl:Window.vTcl.py_console "supp"
    update
    $vTcl(supp_source_window) delete 1.0 end
    $vTcl(supp_output_window) delete 1.0 end
    if {$vTcl(project,file) == ""} {
        vTcl:save
    }
    vTcl:get_import_name
    set top .vTcl.supp_console
    #$top.butframe.but33 configure -command "vTcl:save_support_file"
    set filename "[file rootname $vTcl(project,file)]_support.py"
    #wm title $top "Python Console - $vTcl(import_name).py"
    wm title $top "Support Console - $filename"
    update
    set vTcl(save_support) 1
    if {[file exists $filename]} {
        # There is an existing support module.
        vTcl:determine_updates $window
        if {([info exists vTcl(must_add_vars)]) || \
                ([info exists vTcl(must_add_procs)])} {
            # There are possible updates.
            set reply [tk_dialog .foo "Update Question" "Do you wish to replace, update, or use the existing support file?" \
                       question 2 "Replace" "Use Existing" "Update"]
        } else {
            # No updates to be applied.
            set reply [tk_dialog .foo "Update Question" "Do you wish to replace or use the existing support file?" \
                       question 1 "Replace" "Use Existing"]
        }
        switch $reply {
            0 {
                # Replace
                vTcl:replace_support_module $window
            }
            1 {
                # Use Existing File
                vTcl:use_existing_support_module $window
                #set vTcl(save_support) 0
                $vTcl(supp_code_window) edit modified 0
            }
            2 {
                # Update
                vTcl:update_support_module $window
            }
        }
    } else {
        vTcl:generate_support $window   ;# Call which creates the code for
                                         # the support module
    }
    #Save the file
    set vTcl(python_module) "Support"
    #$vTcl(gui_code_window) edit modified 0
}


proc vTcl:replace_support_module {window} {
    global vTcl
    vTcl:generate_support $window   ;# Call which creates the code for
                                     # the support module
    #Save the file
    set vTcl(python_module) "Support"
    $vTcl(supp_code_window) edit modified 1
}

proc vTcl:read_support_module {} {
    # Reads the support module and return as a sting.
    global vTcl
    global support_module
    #  Slurp up the data file
    set fn $vTcl(import_filename)
    set fp [open $fn r]
    set module [read $fp]
    close $fp
    return $module
}

proc vTcl:use_existing_support_module {window} {
    # Merely reads the existing file and puts it into the Python
    # Console with colorization.
    global vTcl
    # Read existing support module.
    set source [vTcl:read_support_module]
    # Now write it out.

    $vTcl(supp_source_window)  delete 1.0 end
    $vTcl(supp_source_window)  insert end $source
    set vTcl(py_source) $source
    vTcl:colorize_python "supp"
    #vTcl:syntax_color [$vTcl(source) subwidget text]
    return
}

proc vTcl:determine_updates {window} {
    global vTcl
    #set vTcl(imported_variable) 0            ;# Moved init stuff here 12/18/15
    #set vTcl(support_variable_list)  []
    #set vTcl(support_function_list)  []
    vTcl:analyze_existing_support_module
    vTcl:scan_widgets $window
    vTcl:check_variable_list
    vTcl:check_function_list
}

proc vTcl:update_support_module {window} {
    global vTcl
    vTcl:set_timestamp
    vTcl:determine_updates $window
    # vTcl:analyze_existing_support_module
    # vTcl:scan_widgets $window
    # vTcl:check_variable_list
    # vTcl:check_function_list
    set new_code [vTcl:gen_updated_source]
    $vTcl(supp_source_window)  delete 1.0 end
    $vTcl(supp_source_window)  insert end $new_code
    set vTcl(py_source) $new_code
    vTcl:colorize_python "supp"
}

proc vTcl:check_variable_list {} {
    global vTcl
    if {[info exists vTcl(must_add_vars)]} {
        unset vTcl(must_add_vars)
    }
    if {[info exists vTcl(tk_vars)]
        && [info exists vTcl(support_variable_list)]} {
        foreach {v t} $vTcl(support_variable_list) {
            set ret [lsearch -exact $vTcl(tk_vars) $v]
            if {$ret == -1} {
                lappend vTcl(must_add_vars) $v $t
            }
        }
    } else {
        if {[info exists vTcl(support_variable_list)]} {
            foreach {v t} $vTcl(support_variable_list) {
                lappend vTcl(must_add_vars) $v $t
            }
        }
    }
}

proc vTcl:check_function_list {} {
    global vTcl
    if {[info exists vTcl(must_add_procs)]} {
        unset vTcl(must_add_procs)
    }
    if {[info exists vTcl(support_function_list)] } {
        foreach f $vTcl(support_function_list) {
            if {[string first "pop" $f] > -1} continue  ;# Since popup
            # functions are
            # in GUI module
            # not support
            # module.
            set nf $f
            regexp {\w+\.(\w+)} $f match nf  ;# delete "xxx_support."
                                              # from function name
            regexp {[ ]*lambda.*:[ ]*(.*)} $nf match nf ; # delete lambda :
            regexp {(.*)\(} $nf match nf      ;# delete parameters from
                                               # function name.
            set ret [lsearch -exact $vTcl(procs_found) $nf]
            if {$ret == -1} {
                lappend vTcl(must_add_procs) $f
            }
        }
    }
}

proc vTcl:gen_updated_source {} {
    # Adds actual new lines of code to the support module.
    global vTcl
    set line_count 0
    set last_line_null 0

    foreach line $vTcl(support_module) {
        if {($vTcl(timestamp_found)) && \
                ($line_count == $vTcl(time_stamp_line))} {
            # Since I want old timestamp as well as the new one.
            append str $line "\n"
            # put out updated timestamp
            append str "#    $vTcl(timestamp)\n"
            # Next 2 lines because I do not want to put out the
            # existing line with the timestamp.
            incr line_count
            continue
        } elseif {($vTcl(tk_vars_found) == 1) && \
                      ($line_count == $vTcl(tk_vars_add))} {
            # Last line - tk_vars_add replaced tk_vars_end 4/11/17
            # Put out new vars.
            append str $line "\n"
            append str [vTcl:add_new_tk_vars]
            # Put out new functions
            #append str [vTcl:add_new_functions] "\n"  Rozen 4/11/17
            incr line_count
            #set last_line_null
            continue

        } elseif {($vTcl(tk_vars_found) == 1) && \
                      ($line_count == $vTcl(procs_start))} {
            # Whole elseif clause 4/11/17
            # Put out new functions
            append str $line "\n"
            append str [vTcl:add_new_functions]
            incr line_count
            #set last_line_null 1
            continue                                 ;# Rozen
        } elseif {($vTcl(tk_vars_found) == 0) && \
                ($line_count == $vTcl(procs_start))} {
            # Put out new "set_Tk_var"
            append str [vTcl:add_new_tk_vars "new"]
            # Put out new functions
            append str [vTcl:add_new_functions] "\n"
            append str $line "\n"
            incr line_count
            #set last_line_null 1
            continue                                 ;# Rozen
        } else {
# dmsg ::[string trim $line]::
# dpr last_line_null
#             if {$last_line_null == 0} {
#                 append str "\n"
#             }
#             if {[string trim $line] == ""} {
#                 set last_line_null 1
#             } else {
#                 set last_line_null 0
#             }
            append str $line
            append str "\n"
        }
        incr line_count
    }
    set vTcl(supp_save_warning) "Unsaved changes"

    return $str
}

proc vTcl:add_new_tk_vars {{type update}} {
    # Add either variable entries to existing set_Tk_vars (update) or
    # a whole new set_Tk_vars function (new).
    global vTcl
    if {![info exists vTcl(must_add_vars)]} return
    switch $type {
        update {
            return [vTcl:py_build_set_Tk_var $vTcl(must_add_vars) "no"]
        }
        new {
            return [vTcl:py_build_set_Tk_var $vTcl(must_add_vars)]
        }
    }
}

proc vTcl:add_new_functions {} {
    global vTcl
    if {![info exists vTcl(must_add_procs)]} return
    set vTcl(proc_list) {}
    set vTcl(funct_list) $vTcl(must_add_procs)
    vTcl:create_functions  "import"
    append ret "\n" $vTcl(functions) "\n"
    return $ret
}

proc vTcl:analyze_existing_support_module {} {
    # Read existing support file and look for (1) defined function
    # names, (2) def set_Tk_var() occurrences, and (3) if __name__
    # occurrences. The list of support module may include set_Tk_var
    # which will ave to be treated specially. The main things
    # calculated are the location of the time stamp, the location of
    # set_Tk_var and the lists of existing tk vars and callback
    # functions.
    global vTcl
    set module [vTcl:read_support_module]
    # split module into lines
    set vTcl(support_module) [split $module "\n"]
    #set patt "^proc[:space:]+?(\w+?)^"
    #set time_patt "^# Time-stamp:"
    set time_patt "# +(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec).+(AM|PM)"
    set proc_patt "^def +(\[A-Za-z0-9_\]+)"
    set global_patt " global +(\[A-Za-z0-9_\]+)"
    set tkvar_patt "^def +set_Tk_var()"
    set name_patt "^if __name__ == '__main__':"
    #set end_patt "^\S"
    set end_patt "^\[A-Za-z0-9#_\]"
    set vTcl(timestamp_found) 0
    set vTcl(procs_found) []
    set vTcl(name_found) 0
    set vTcl(tk_vars_found) 0
    set line_count 0
    set var_flag 0
    foreach line $vTcl(support_module) {
        # look for time stamp.
        set ret [regexp $time_patt $line]
        if {$ret} {
            set vTcl(time_stamp_line) $line_count
            set vTcl(timestamp_found) 1
        }

        # look for functions found in the support module.
        set ret [regexp $proc_patt $line match name]
        if {$ret} {
            # Test add 4/11/17
            if {$name !="set_Tk_var"} {
                lappend vTcl(procs_found) $name
                if {![info exists vTcl(procs_start)]} {
                    set vTcl(procs_start) $line_count
                }
            }
        }

        # look for "def set_Tk_var()"
        set ret [regexp $tkvar_patt $line]
        if {$ret} {
            set vTcl(tk_vars_start) $line_count
            set var_flag 1
            set vTcl(tk_vars_found) 1
            incr line_count ;# because we are jumping to the bottom of
                             # the loop we would be missing the
                             # increment.
            continue
        }
        if {$var_flag} {
            # Look for a character in column 1 signifying the end of
            # set_TK_var.
            set found_first 0
            set ret [regexp $end_patt $line]
            if {$ret} {
                set var_flag 0
                set vTcl(tk_vars_end) $line_count
            } else {
                # look for global statement.
                set r [regexp $global_patt $line match global_name]
                if {$r} {
                    lappend vTcl(tk_vars) $global_name
                    # Attempt to put new stuff at top of function.
                    if {!$found_first} {
                        set vTcl(tk_vars_add) [expr $line_count - 1]
                        incr found_first
                    }
                }
            }
        }
        # NEEDS WORK - I may not need to do this following because I
        #  may put all additions in place of current set_TK_var.  look
        #  for "if __name__ == '__main__':"
        set ret [regexp $name_patt $line]
        if {$ret} {
            set vTcl(name_found) 1
        }
        # If name found then save all the rest of the file for
        # addition at the end.
        if {$vTcl(name_found)} {
            lappend vTcl(name_stmts) $line
        }
        incr line_count

    }
# dskip
# if {[info exists vTcl(time_stamp_line)]} {
# dpr vTcl(time_stamp_line)
# set l [lindex $vTcl(support_module) $vTcl(time_stamp_line)]
# dpr l
# }
# if {[info exists vTcl(procs_start)]} {
# dpr vTcl(procs_start)
# }
# if {[info exists vTcl(procs_found)]} {
# dpr vTcl(procs_found)
# }
# if {[info exists vTcl(tk_vars)]} {
# dpr vTcl(tk_vars)
# }
# if {[info exists vTcl(tk_vars_start)]} {
# dpr vTcl(tk_vars_start)
# }
# if {[info exists vTcl(tk_vars_end)]} {
# dpr vTcl(tk_vars_end)
# }
# if {[info exists vTcl(name_stmts)]} {
# dpr vTcl(name_stmts)
# }
}

# to delete some lines in the file [lreplace $lines $from $to]

proc vTcl:get_import_name { } {
    # Builds the root name of the support module for use in generating
    # skeletal functions.
    global vTcl
    set t [file tail $vTcl(project,file)]
    set vTcl(import_name) [file rootname $t]_support
    set vTcl(import_filename) "[file rootname $vTcl(project,file)]_support.py"
}

proc  vTcl:generate_support {window} {
    # This is the top of the generation.
    global vTcl
    vTcl:set_timestamp
    set source \
"#! /usr/bin/env python
#
# Support module generated by PAGE version $vTcl(version)
# In conjunction with Tcl version $vTcl(tcl_version)
#    $vTcl(timestamp)
"
    # Append to source the import code.
    append source "\n" $vTcl(tk_import)
    set vTcl(imported_variable) 0            ;# Moved init stuff here 12/18/15
    set vTcl(custom_present) 0
    set vTcl(support_variable_list)  []
    set vTcl(support_function_list)  []
    vTcl:python_inspect_popup     ;# Here we look at any popup menus. 1/12/17

    vTcl:scan_widgets $window

    set vTcl(import_module) "[file rootname $vTcl(project,file)]_support.py"
    # Create code for the support variables.  This section not needed.
    if {[llength $vTcl(support_variable_list)] > 0} {
        set vTcl(variable_code) \
            [vTcl:py_build_set_Tk_var $vTcl(support_variable_list)]
        append source "\n" $vTcl(variable_code)
    }

    # Create code for the functions needed.  NEEDS WORK: Consider
    # replacing the next4 lines with call to add_new_tk_vars "new"
    set vTcl(proc_list) {}
    set vTcl(funct_list) $vTcl(support_function_list)
    vTcl:create_functions "import"

    set project_name [file tail $vTcl(project,name)]
    set project_name [file rootname $project_name]

    append source "\n" $vTcl(functions)
    append source \
"
def init(top, gui, *args, **kwargs):
    global w, top_level, root
    w = gui
    top_level = top
    root = top

def destroy_window():
    # Function which closes the window.
    global top_level
    top_level.destroy()
    top_level = None
"
    if {$vTcl(custom_present)} {
        append source \
"
# Placeholder to be replace by user definition of Custom.
Custom = Frame
"
    }
    append source \
"
if __name__ == '__main__':
    import $project_name
    ${project_name}.vp_start_gui()
"
    # Now write it out.
    $vTcl(supp_source_window)  delete 1.0 end
    $vTcl(supp_source_window)  insert end $source
    set vTcl(supp_save_warning) "Unsaved changes"

    set vTcl(py_source) $source
    vTcl:colorize_python "supp"
    return
}

proc vTcl:scan_widgets {window} {
    # Here I scan the widget tree looking for stuff to put into the
    # support module as part of the skeleton code, mainly functions
    # and variables.
    global vTcl
    #set vTcl(imported_variable) 0
    #set vTcl(support_variable_list)  []
    #set vTcl(support_function_list)  []
    vTcl:python_inspect_bind $window
    foreach widget [winfo children $window] { # Rozen
        if {[string first "vTH_" $widget] > -1} continue ;# skip over handles
        set class [vTcl:get_class $widget]
        if {$class == "Custom"} {
            set vTcl(custom_present) 1
            #continue
        }
        vTcl:python_inspect_widget $widget ;#$prefix $window
        vTcl:python_inspect_bind $widget
        vTcl:scan_widgets $widget       ; #trying to recurse thru
                                          #children of widgets
                                          #12/18/2015
    }

}

proc vTcl:python_inspect_popup {} {
    # See if we have a popup menu and if so find all the functions to be invoked.
    global vTcl
     set root_list [winfo children .]
    # if {[lsearch $root_list ".popup"] > -1} {
    #     vTcl:python_inspect_widget .popup
    # }
    set popups [lsearch -all -inline $root_list ".pop*"]
    foreach popup $popups {
        vTcl:python_inspect_widget $popup
    }
}

proc vTcl:python_inspect_widget {target} {
    # Decide which configuration inspection function to call.
    global vTcl
    set widclass [winfo class $target]
    switch $widclass {
        TMenubutton {
            set menu [$target cget -menu]
            vTcl:python_inspect_menu_config $menu
        }
        Menu -
        Popupmenu {
            vTcl:python_inspect_menu_config $target
        }
        TNotebook {
            # A container widget.
            set pages [$target tabs]
            foreach p $pages {
                # for widgets inside each page.
                vTcl:python_inspect_subwidgets $p
            }
        }
        TPanedwindow {
            # A container widget
            set panes [$target panes]
            foreach p $panes {
                vTcl:python_inspect_subwidgets $p
            }
        }
        Frame -
        TFrame -
        TLabelframe {
            # The other container widgets.
            vTcl:python_inspect_subwidgets $target
        }
        Scrolledlistbox -
        Scrolledtext -
        Scrolledtreeview -
        Scrolledentry -
        Scrolledcombo {
            vTcl:python_inspect_subwidgets $target
        }
        default {
            vTcl:python_inspect_config $target $widclass
        }
    }
}


proc vTcl:python_inspect_config {widget widclass} {
    global vTcl
    set opt [$widget configure]
    foreach op $opt {
        foreach {o x y d v} $op {}
        set v [string trim $v]
        set len [string length $o]
        set sub [string range $o 1 end]
        switch -exact -- $sub {
            textvariable {
                if {[string length $v] == 0} continue
                if {[string first self. $v] == 0} continue
                #if {[string first . $v] == -1} continueinspect_menu_config
                # Import variable
                # set i [string first . $v]
                # set vv [string range $v 0 [expr $i - 1]]
                # set vTcl(global_variable) 1
                # lappend vTcl(support_variable_list) $vv "StringVar"
                lappend vTcl(support_variable_list) $v "StringVar"
            }
            listvariable -
            variable {
                if {[string length $v] == 0} continue
                if {[string first self. $v] == 0} continue
                #if {[string first . $v] == -1} continue
                #else {
                    # imported variable.
                    set vTcl(imported_variable) 1
                    switch $widclass {
                        "Scrolledlistbox" -
                        "Checkbutton" -
                        "TCheckbutton" -
                        "Listbox" -
                        "Radiobutton" -
                        "TRadiobutton" {
                            set m StringVar
                        }
                        "TScale" -
                        "Scale" {
                            set m DoubleVar
                        }
                        "TProgressbar" {
                            set m IntVar
                        }
                    }
                    lappend vTcl(support_variable_list) $v $m
                #}

            }
            command  {
                if {$v == ""} continue
                set r $v
                if {[string first xview $v] > -1} continue
                if {[string first yview $v] > -1} continue
                if {[string first "self." $v] == 0} {
                    # discard class functions
                    continue
                }
                if {[string first "lambda" $v] == 0} {
                    # Remove the lambda part of the function name
                    set index [string first ":" $v]
                    set exp [expr $index + 1]
                    set r [string range $v [expr $index + 1] end]
                }
                lappend vTcl(support_function_list) [string trim $r]
            }
            opencmd -
            closecmd -
            browsecmd {
            }
        }
    }

}

proc vTcl:python_inspect_subwidgets {subwidget} {
    global vTcl
    set widget_tree [vTcl:get_children $subwidget]
    foreach i $widget_tree {
        if {"$i" != "$subwidget"} {
            vTcl:python_inspect_widget $i
        }
    }
}

proc extract_up_to_period {str} {
    set index [string first ":" $str]
    if {$index > -1} {
        set str [string range $str [expr $index + 1] end]
    }
    set index [string first "." $str]
    set module [string range $str 0 [expr $index - 1]]
    set module [string trim $module]
    return $module
}

proc vTcl:extract_module_name {fun_list var_list import} {
    # Look at the variable and function names and extract the module name.
    global vTcl
    set module {}
    if {[llength $fun_list] > 0} {
         foreach {funct} $fun_list {
             set m [extract_up_to_period $funct]
             if {$m != "" && $m != "self"} {
                lappend module [extract_up_to_period $funct]
             }
          }
    set vTcl(l_v_list) {}
    }
    if {[llength $var_list] > 0} {
        foreach {var type} $var_list {
            set m [extract_up_to_period $var]
            if {$m != "" && $m != "self"} {
                lappend module [extract_up_to_period $var]
            }
        }
    }
    set module [lsort -unique $module]
    # A couple of diagnostics to see that there is only one import named.
    if {[llength $module] > 1} {
        append msg "There is more than one module specified for import. " \
            "\nThey are: "
        foreach {m} $module {
            append msg $m ", "
        }
        tk_dialog -title Error $msg error 0 "OK"
        return "Failure"
    }
    if {$import == "import"} {
        if {[llength $module] < 1} {
            set msg "There no modules specified for import"
            foreach {m} $module {
                append msg $m ", "
            }
            #tk_messageBox -title Error -message $msg
            tk_dialog -title Error $msg error 0 "OK"
        }
    }
    if {[info exists module]} {
        return $module
    } else {
        return ""
    }
}

proc vTcl:test_file_content {filename new_content} {
    # Function to determine if we can safely skip the save function.
    # A return value of 0 means that we can skip the actual save.
    # A return value of 1 means that we must save.
    global vTcl
    set save 1
    set skip 0
    # If we changed the GUI then save everything
    if {$vTcl(change) > 0} {
        vTcl:save
        return $save
    }
    # If the Python file does not exist, we clearly have to save it.
    if {[file exists $filename] == 0} {
        return $save
    }
    # If we have edited the Python Console code window, we have to save.
    #set modified [$vTcl(gui_code_window) edit modified]
    #if {$modified} {
    #    return $save
    #}
    # If the content of the code window is unchanged, we can skip the save.
    if {$new_content == $vTcl(last_save,$vTcl(python_module))} {
        return $skip     ;# Skip the save.
    }
    # If we have not modified the file then we can skip the save.
    #if {!$modified} {
    #    return $skip
    #    }
    # If we got this far then we want to save.
    return $save     ;# Do the save.
}

proc vTcl:save_python_file {filename prefix} {
    # Write out the file using filename which should be a file name in
    # the same directory as the input tcl file.  It saves existing
    # versions of the file in rotating backup files with added
    # extensions of bak1, bak2, ...

    global vTcl
    update
    update idletasks
    # # First we try to determine if the content of the Python Console
    # # changed since the last save.
    # set skip 0
    # #set vTcl(python_module) "Support"
    # set new_content [$vTcl(gui_source_window) get 1.0 end] ;# Read contents of
    #                                                     # Python Console
    # if {[vTcl:test_file_content $filename $new_content] == $skip} {
    #     return
    # }
    # Don't think that I need to consider any of the above.
    # I am going to rely on the warning flag.
    foreach n {4 3 2 1} {
        set n_plus_1 [expr $n + 1]
        catch {[file copy -force $filename.bak$n $filename.bak$n_plus_1]}
    }
    catch {[file copy -force $filename $filename.bak1]}
    set vTcl(py_source) [$vTcl(${prefix}_source_window) get 1.0 end]
    set fid [open $filename "w"]
    puts $fid $vTcl(py_source)
    flush $fid
    close $fid
    #set vTcl(last_save,$vTcl(python_module)) $vTcl(py_source)
    #$vTcl(gui_code_window) edit modified 0
    return 0
}

proc  vTcl:python_inspect_menu_config {target} {
    global vTcl
    if {[string first .# $target] >= 0} {return}
    set entries [$target index end]
    if {$entries == "none"} {return}
    set result ""
    # if {$readable_name == ""} {
    #     set widname [vTcl:widget_2_widname $target]
    # } else {
    #     set widname $readable_name
    # }
    for {set i 0} {$i<=$entries} {incr i} {
        set type [$target type $i]
        if {$target == $vTcl(toplevel_menu)} {
            if {$type == "tearoff"} {
                # tearoff at toplevel doesn't really mean anything,
                # but let the user specify it anyway.
                continue
            }
        }
        set opts [$target entryconfigure $i]
        switch $type {
            cascade {
                set child [$target entrycget $i -menu]
                vTcl:python_inspect_menu_config $child
            }
            command -
            checkbutton -
            radiobutton {
                vTcl:python_menu_support $opts
            }
        }
    }
}

proc vTcl:python_menu_support {opts} {
    # Look at menus to extract module names and Tk variables.
    global vTcl
    foreach op $opts {
        foreach {o x y d v} $op {
            # o - option
            # d - default
            # v - value
        }
        set v [string trim $v]
        if {$d == $v} continue   ;# If value == default value bail.
        set oa [string range $o 1 end]
        switch -exact -- $o {
            -command {
                set r $v
                if {$v == ""} continue
                if {[string first xview $v] > -1} continue
                if {[string first yview $v] > -1} continue
                if {[string first "self." $v] == 0} {
                    # discard class functions
                    continue
                }
                # Remove any lambda present.
                set x [regexp {[ \# ]*lambda.*:[ ]*(.*)} $v match v]
                # if {[string first "lambda:" $v] == 0} {
                #     # Remove the lambda part of the function name
                #     set index [string first ":" $v]
                #     set exp [expr $index + 1]
                #     set r [string range $v [expr $index + 1] end]
                # }
                if {[string first "#" $v] == 0} {
                    set v [string range $v 1 end]
                }
                # if {[string first "." $v ] == -1} {
                #     # Discard global functions not in the imported module
                #     set v [vTcl:prepend_import_name $v]
                # }
                lappend vTcl(support_function_list) [string trim $v]
            }
            -onvariable -
            -offvariable -
            -variable {
                if {[string first self. $v] == 0} continue
                #if {[string first . $v] == -1} continue
                # imported variable.
                set vTcl(imported_variable) 1
                set m StringVar
                lappend vTcl(support_variable_list) $v $m
            }
        }
    }
}

proc vTcl:python_inspect_bind {target} {
    # Look at bindings for module names.
    global vTcl
    set class [vTcl:get_class $target]
# 6/7/16 May not need this stuff.
#     set needle [string first "Scrolled" $class]
#     if {$needle > -1}  {
# dmsg needle
#         set result [vTcl:python_inspect_bind $target.01]
#         return $result
#     }
    set bindlist [lsort [bind $target]]
    foreach i $bindlist {
        set command [bind $target $i]
        set command [string trim $command]
        set v $command
                if {$v == ""} continue
                set r $v
                if {[string first xview $v] > -1} continue
                if {[string first yview $v] > -1} continue
                if {[string first "self." $v] == 0} {
                    # discard class functions
                    continue
                }
                #if {[string first "." $v ] == -1} {
                #    # Discard global functions not in the imported module
                #    continue
                #}
                if {[string first "lambda" $v] == 0} {
                    # Remove the lambda part of the function name
                    set index [string first ":" $v]
                    set exp [expr $index + 1]
                    set r [string range $v [expr $index + 1] end]
                }
                lappend vTcl(support_function_list) [string trim $r]
                #lappend vTcl(support_function_list) $r
    }
}

proc vTcl:save_support_file {} {
    # Generate support module filename and invoke vTcl:save_python_file
    # to save the file.
    global vTcl
    # if {$vTcl(project,file) == ""} { deleted 1/8/16
    #     vTcl:save
    # }
    set filename "[file rootname $vTcl(project,file)]_support.py"
    if {[file exists $filename] && \
        $vTcl(supp_save_warning) != ""} {
        set reply [tk_dialog .foo "Save Question" \
      "The file $filename already exists, do you want to save support console?" \
                       question 1 "Yes" "No"]
        if {$reply == 1} {
            return
        } else {
            vTcl:save_python_file  $filename "supp"
        }
    } else {
        # Doesn't exist so save.
        vTcl:save_python_file  $filename "supp"
    }
}
