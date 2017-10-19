# NEEDS WORK. May not need the variable diff at all. 11/19/14
#      set diff [vTcl:diff_two_files $file $tmp_name]  ;# Rozen 11/17/14
#dpr, diff file tmp_name


proc vTcl:read_split_file {file} {
    #  Slurp up the data file
     set fp [open $file r]
     set file_data [read $fp]
     close $fp

    #  Process data file
     set data [split $file_data "\n"]
     return $data
}

proc vTcl:diff_two_files {file1 file2} {
    # Compare two files starting with line 5 of each. Return 0 if they
    # are the same, return 1, if they differ.
    if {![file exists $file1] } {
        return 1
    }
    if {![file exists $file2]} {
        return 1
    }

    set l1 [vTcl:read_split_file $file1]
    set l2 [vTcl:read_split_file $file2]

    if {[llength $l1] != [llength $l2]} {
        return 1
    }

    for {set i 4} {$i<[llength $l1]} {incr i} {
        set line1 [lrange $l1 $i $i]
        set line2 [lrange $l2 $i $i]
        if {$line1 != $line2} {
            return 1
        }
    }
    return 0
}
