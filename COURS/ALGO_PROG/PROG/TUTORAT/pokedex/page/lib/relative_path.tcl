proc vTcl:relTo {targetfile currentpath} {
  # Get relative path to target file from current path
  # Found at http://wiki.tcl.tk/15925 via google search.
  # First argument is a file name, second a directory name (not checked)
  set cc [file split [file normalize $currentpath]]
  set tt [file split [file normalize $targetfile]]
  if {![string equal [lindex $cc 0] [lindex $tt 0]]} {
      # not on *n*x then
      return -code error "$targetfile not on same volume as $currentpath"
  }
  while {[string equal [lindex $cc 0] [lindex $tt 0]] && [llength $cc] > 0} {
      # discard matching components from the front
      set cc [lreplace $cc 0 0]
      set tt [lreplace $tt 0 0]
  }
  set prefix ""
  if {[llength $cc] == 0} {
      # just the file name, so targetfile is lower down (or in same place)
      set prefix "."
  }
  # step up the tree
  for {set i 0} {$i < [llength $cc]} {incr i} {
      append prefix " .."
  }
  # stick it all together (the eval is to flatten the targetfile list)
  return [eval file join $prefix $tt]
}
