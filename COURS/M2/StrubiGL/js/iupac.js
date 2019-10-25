/*
 *  StruBiGL: Structural Bioinformatics and WebGL
 *  Copyright (C) 2018  Jean-Christophe Taveau.
 *
 *  This file is part of StruBiGL
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with StruBiGL.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */


class IUPAC {
  /*
  Amino Acid Code: Three letter Code: Amino Acid:
  ---------------- ------------------ -----------
  A.................Ala.................Alanine
  B.................Asx.................Aspartic acid or Asparagine
  C.................Cys.................Cysteine
  D.................Asp.................Aspartic Acid
  E.................Glu.................Glutamic Acid
  F.................Phe.................Phenylalanine
  G.................Gly.................Glycine
  H.................His.................Histidine
  I.................Ile.................Isoleucine
  K.................Lys.................Lysine
  L.................Leu.................Leucine
  M.................Met.................Methionine
  N.................Asn.................Asparagine
  P.................Pro.................Proline
  Q.................Gln.................Glutamine
  R.................Arg.................Arginine
  S.................Ser.................Serine
  T.................Thr.................Threonine
  V.................Val.................Valine
  W.................Trp.................Tryptophan
  X.................Xaa.................Any amino acid
  Y.................Tyr.................Tyrosine
  Z.................Glx.................Glutamine or Glutamic acid
  */

  /**
   * Use of a static getter
   */
  static get alphabet1() {
    return ['A','B','C','D','E','F','G','H','I','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
  }

  static get alphabet3() {
    return ['ALA','ASX','CYS','ASP','GLU','PHE','GLY','HIS',
            'ILE','LYS','LEU','MET','ASN','PRO','GLN',
            'ARG','SER','THR','VAL','TRP','XAA','TYR','GLX'
    ];
  }

  /**
   * Three To One converter
   */
  static threeToOne(aa) {
    return IUPAC.alphabet1[IUPAC.alphabet3.indexOf(aa)] || '?';
  }

  /**
   * One To Three converter
   */
  static oneToThree(aa) {
    return IUPAC.alphabet3[IUPAC.alphabet1.indexOf(aa)] || '???';
  }

} // End of class IUPAC

