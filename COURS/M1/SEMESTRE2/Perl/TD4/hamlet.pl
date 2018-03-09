open (H, "hamlet.xml");
my $p;
my $a;
my $s;
my $sa;
my $c;
my $c2;
my @lp;
my @lspa;
my @lppa;
my @lpps;
my @ldl;
my @ldl2;
my @lpp;
my %ppa;
my $ppp;
my $pp;
my @lshp;
my @lshop;
my $adlp;
my $sdlp;

while(<H>){chomp;
if ($_ =~ /<PERSONA>([^,]*).*<\/PERSONA>/){
    $p++;push(@lp, $1);
    }
if ($_ =~ /<ACT>/){
    $a++;$c=1;
    }
if ($_ =~ /<SCENE>/){
    $s++;
    $sa++;
    $c2=1;
    }
if ($c == 1){
    if ($c2 == 1){
        if ($_ =~ /<SPEAKER>(.*)<\/SPEAKER>/){
            if (grep(/$1/, @lpps)){;}
            else{push(@lpps, $1);}
            if (grep(/$1/, @lppa)){;}
            else{push(@lppa, $1);}
            if (grep(/$1/, @lpp)){
                $ppa{$1}++;
                }
            else{
                push(@lpp, $1);
                $ppa{$1}=1;
                }
            }

        if ($_ =~ /To be, or not to be/){
            $adlp=$a;$sdlp=$s;
            }
        }
    }

    if ($_ =~ /<\/SCENE>/){
        $c2=0;
        if (grep(/HAMLET/, @lpps)){
            push(@lshp, $s);
            }
        if (grep(/HAMLET/, @lpps) && grep(/OPHELIA/, @lpps)){
            push(@lshop, $s);
            }
        push(@ldl2, $#lpps);@lpps=();
        }
    if ($_ =~ /<\/ACT>/){
        $c=0;
        push(@ldl, $#lppa);
        @lppa=();
        push(@lspa, $sa);$sa = 0;
        }
    }

print "Le nombre de personnage est $p\n";
print "Le nombre d'actes est $a\n";
print "Le nombre de scenes est $s\n\n";

for (my $x=0; $x!=$a; $x++){
    print "ACTE ", $x+1," a ", $lspa[$x]," scenes\n";
    }
print "\n";$z=0;

for (my $x=0; $x!=$a; $x++){
    for (my $w=0; $w!=$lspa[$x]; $w++){
        print "ACTE ", $x+1," SCENE ", $w+1," a ", $ldl2[$z], " personnages\n";$z++;
        }
    }

for $elem (sort @lp){
    print $elem, "\n";
    }
while (($cle,$val)=each(%ppa)){
    if ($val > $pp){
        $pp = $val;
        $ppp = $cle;
        }
    print "$cle parle $val fois\n";
    }

print "$ppp parle plus ($pp fois)\n";
print "Hamlet scenes ";
for $n (@lshp){
    print $n," ";
    }
print "\n";print "Hamlet Ophelia scenes ";
for $n (@lshop){
    print $n," ";
    }
print "\n";
print "Hamlet réplique Acte $adlp Scene $sdlp\n";