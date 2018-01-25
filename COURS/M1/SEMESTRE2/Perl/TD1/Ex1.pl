my @tab = (1,2,3,4,5,6);
my @tab2 = ();

for $a(@tab){
    $b=pop(@tab);
    unshift(@tab,$b);    
    push(@tab2,$b);
}
print @tab2;