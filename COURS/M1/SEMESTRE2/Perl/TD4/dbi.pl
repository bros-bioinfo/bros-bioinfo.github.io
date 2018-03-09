use strict;
use DBI; #chargement du module DBI => interface générique pour l'accès à une base de données
# connexion en utilisant le pilote DBI:Pg

my $dbh = DBI->connect("DBI:Pg:dbname=piejacquet;host=dbserver", "piejacquet", "1234", {'RaiseError' => 1});
# # création d'une table
# $dbh->do("create table test(a int primary key, b int)");
# my $rows = $dbh->do("INSERT INTO test (a, b) VALUES (1, 2)");
# $rows += $dbh->do("INSERT INTO test (a, b) VALUES (3, 4)");
# print "$rows n-uplets insérés\n";
#SELECT
my $sth = $dbh->prepare("SELECT * FROM appart");
$sth->execute();
# on itère sur chaque ligne du résultat. fetchrow_hashref retourne une référence vers un hash avec le nom
# de chaque attribut comme clé ou faux si rien à retourner
while(my @t = $sth->fetchrow_array()) {
print join(" ",@t),"\n";
}
#on libère la mémoire (suppession du résultat de la requête)
$sth->finish;
print "\n";