open (H, "hamlet.xml");

my $perso;
my %listeperso;

my $act;
my $actname;

use Data::Dumper qw(Dumper);
my %piece;
my @persoscene;


my $scene;


while(<H>){
    chomp;
    if ($_ =~ /<PERSONA>(.*)<\/PERSONA>/){
        $perso++;
        push(@listeperso, $1);
    }
    if ($_ =~ /<ACT><TITLE>(.*)<\/TITLE>/){
        $act++;
        $actname=$1;
        #$piece{$act}{"TITLE"}=$1;
    }
    if ($_ =~ /<SCENE><TITLE>(.*)<\/TITLE>/){
        $scene++;
        $piece{$actname}{$scene}=$1;
    }

    if ($_ =~ /<SPEAKER>(.*)<\/SPEAKER>/){
        if (defined $piece{$actname}{$scene}{$1}){
            $piece{$actname}{$scene}{$1}++;
        }
        else{
            $piece{$actname}{$scene}{$1}=1;
        }
    }

    if ($_ =~ /<\/ACT>/){
        $scene = 0;        
    }
}


print Dumper (\%piece);


print "\nIl y a ",  $nb=keys %piece, " actes\n";
foreach my $actes (sort keys %piece) {
    
    print "\n\nIl y a ",  $nb=keys %{ $piece{$actes} }, " scènes dans cet acte\n\n";    
    
    foreach my $scenes (sort keys %{ $piece{$actes} }) {
    
        print "\n\n$actes,\n\t\t SCENE: $scenes:\t TITRE : $piece{$actes}{$scenes}\n";
    
        foreach my $perso (sort keys %{ $piece{$actes}{$scenes} }) {
         
            print "\t\t\t$perso : $piece{$actes}{$scenes}{$perso}\n";
        }

    }
}

print "-----------------";

# foreach (sort @listeperso){
#     print "\n$_\n";
# }
