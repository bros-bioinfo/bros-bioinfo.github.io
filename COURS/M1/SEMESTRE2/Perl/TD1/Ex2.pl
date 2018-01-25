my $seq = "ATGGTCACAGGGTT";

for $a(split //, $seq) {
    if ($a eq "A"){
        print "A  ";
    }
    elsif ($a eq "T"){
        print "T   ";
    }
    elsif ($a eq "C"){
        print "T   ";
    }
    elsif ($a eq "G"){
        print "T   ";
    }
}
print @tab2;