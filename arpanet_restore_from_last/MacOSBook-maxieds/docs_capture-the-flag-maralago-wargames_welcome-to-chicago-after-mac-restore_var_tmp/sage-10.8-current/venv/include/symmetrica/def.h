/* file def.h SYMMETRICA */
/* INT should always be 4 byte */
#ifndef DEF_H

/* POSIX says that inttypes.h includes stdint.h */
#include <inttypes.h>
typedef int32_t INT;
typedef uint32_t UINT;

#define PRIINT PRId32
#define SCNINT SCNd32

#define PRIUINT PRIu32
#define SCNUINT SCNu32

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

# define	NO_REDUCE	(INT)0
# define	POWER_REDUCE	(INT)1
# define	STD_BASIS	(INT)2

#ifdef ULTRIX
#define unix
#include <malloc.h>
#endif /* ULTRIX */

#undef TRUE
#undef FALSE
#define REPORT (INT)3
#define TRUE (INT)1
#define FALSE (INT)0

#define OK (INT)0
#define ERROR (INT)-1
#define ERROR_RETRY (INT)-5
#define ERROR_EXPLAIN (INT)-6

/* exit values of symmetrica, parameters to exit */
#define ERROR_BACKGROUND (int) 101 /* error called while in background mode */
#define ERROR_TIMELIMIT (int) 100 /* time limit */

#define I2PE (INT)1502960 /* 2 equal parameter */
#define not !
#define IMPROPER (INT)1001
#define NONCOMPARABLE (INT)10

#define FIRSTVARINDEX (INT)11125
#define VARTYP (INT)11124
#define LETTERS (INT)11122
#define NUMERICAL (INT)11223

#define EQUAL (INT)300792 /* return value of check_equal_ */
#define NORESULT (INT)20996 /* return value of check_result_ */
#define FREE (char)1
#define NOFREE (char)0

#define t_SQRAD_CYCLO convert_sqrad_cyclo


/* definitionen fuer object
 * NOTE: partition code assumes that there is no unused space in the
 * object struct when an INT is stored. This requires both OBJECTKIND
 * and OBJECTSELF to have a size equal to a machine word.
 */
typedef intptr_t OBJECTKIND;

#define PRIOBJECTKIND PRIdPTR

typedef union {
	intptr_t ob_INT;
	INT * ob_INTpointer;
	char *ob_charpointer;
	struct bruch *ob_bruch;
	struct graph *ob_graph;
	struct list *ob_list;
	struct longint *ob_longint;
	struct matrix *ob_matrix;
	struct monom *ob_monom;
	struct number *ob_number;
	struct partition *ob_partition;
	struct permutation *ob_permutation;
	struct reihe *ob_reihe;
	struct skewpartition *ob_skewpartition;
	struct symchar *ob_symchar;
	struct tableaux *ob_tableaux;
	struct vector *ob_vector;
	} OBJECTSELF;


struct object { OBJECTKIND ob_kind; OBJECTSELF ob_self; };

typedef struct object * OP;

/* die verschiedenen typen */
#define INVISIBLE (OBJECTKIND)-2
#define INFREELIST (OBJECTKIND)-1
#define EMPTY (OBJECTKIND)0
#define INTEGER (OBJECTKIND)1
#define VECTOR (OBJECTKIND)2
#define PARTITION (OBJECTKIND)3
#define BRUCH (OBJECTKIND)4
#define FRACTION (OBJECTKIND)4
#define PERMUTATION (OBJECTKIND)6
#define SKEWPARTITION (OBJECTKIND)7
#define TABLEAUX (OBJECTKIND)8
#define POLYNOM (OBJECTKIND)9
#define SCHUR (OBJECTKIND)10
#define MATRIX (OBJECTKIND)11
#define AUG_PART (OBJECTKIND)12
#define HOM_SYM (OBJECTKIND)13
#define HOMSYM (OBJECTKIND)13
#define SCHUBERT (OBJECTKIND)14
#define INTEGERVECTOR (OBJECTKIND)15
#define INTEGER_VECTOR (OBJECTKIND)15
#define INTVECTOR (OBJECTKIND)15
#define INT_VECTOR (OBJECTKIND)15
#define KOSTKA (OBJECTKIND)16
#define INTINT (OBJECTKIND)17	/* nur fuer test-zwecke */
#define SYMCHAR (OBJECTKIND)18
#define WORD (OBJECTKIND)19
#define LIST (OBJECTKIND)20
#define MONOM (OBJECTKIND)21
#define LONGINT (OBJECTKIND)22
#define GEN_CHAR (OBJECTKIND)23 /* nur fuer test-zwecke */
#define BINTREE (OBJECTKIND)24
#define GRAPH (OBJECTKIND)25
#define COMPOSITION (OBJECTKIND)26
#define KRANZTYPUS (OBJECTKIND)27
#define POW_SYM (OBJECTKIND)28
#define POWSYM (OBJECTKIND)28
#define MONOMIAL (OBJECTKIND)29
#define BTREE (OBJECTKIND)30
#define KRANZ (OBJECTKIND)31
#define GRAL (OBJECTKIND)32
#define GROUPALGEBRA (OBJECTKIND)32
#define ELM_SYM (OBJECTKIND)33
#define ELMSYM (OBJECTKIND)33
#define FINITEFIELD (OBJECTKIND)35
#define FF (OBJECTKIND)35
#define REIHE (OBJECTKIND)36
#define CHARPARTITION (OBJECTKIND)37 /* internal use */
#define CHAR_AUG_PART (OBJECTKIND)38 /* internal use */
#define INTEGERMATRIX (OBJECTKIND)40
#define CYCLOTOMIC (OBJECTKIND)41
#define MONOPOLY (OBJECTKIND)42
#define SQ_RADICAL (OBJECTKIND)43
#define BITVECTOR (OBJECTKIND)44
#define LAURENT (OBJECTKIND)45
#define SUBSET (OBJECTKIND)47

#define FASTPOLYNOM (OBJECTKIND)211093
#define EXPONENTPARTITION (OBJECTKIND)240298
#define SKEWTABLEAUX (OBJECTKIND)20398
#define PARTTABLEAUX (OBJECTKIND)10398
#define BARPERM (OBJECTKIND)230695

#define REVERSEPARTITION (OBJECTKIND)150703 /* only for input */


#define PERMVECTOR (OBJECTKIND)180998
#define PERM_VECTOR (OBJECTKIND)180998
#define PERMUTATIONVECTOR (OBJECTKIND)180998
#define PERMUTATION_VECTOR (OBJECTKIND)180998

#define INTEGERBRUCH (OBJECTKIND)220998
#define INTEGER_BRUCH (OBJECTKIND)220998
#define INTEGERFRACTION (OBJECTKIND)220998
#define INTEGER_FRACTION (OBJECTKIND)220998
#define HASHTABLE  (OBJECTKIND)120199

#define QUEUE  (OBJECTKIND)251103

#define GALOISRING (OBJECTKIND)211106

#define ANYTYPE (OBJECTKIND)201201  /* for tracing, checking */
#define INTTYPE (OBJECTKIND)020102  /* for tracing, checking */

#ifdef DGUX
#define signed
#endif /* DGUX */

#ifdef sun
#define signed
#endif
#ifdef         hpux
#define signed
#endif


struct loc
{
   INT w2,w1,w0;
   struct loc *nloc;
  };

struct longint
{
   struct loc *floc;
   signed char signum; /* -1,0,+1 */
   INT laenge;
};

#define GANZSIGNUM(x) ((x)->signum)
#define GANZLAENGE(x) ((x)->laenge)
#define GANZNEG(x) ( (x)->signum = -(x)->signum)


struct ganzdaten
{
   INT basis,basislaenge,auspos,auslaenge,auszz;
   char folgezeichen;
};

struct zahldaten
{
   char ziffer[13];
   INT mehr;
   INT  ziffernzahl;
   struct loc  *fdez;
};


struct vector { OP v_length; OP v_self; };

struct REIHE_variablen {
  INT index;
  INT potenz;
  struct REIHE_variablen *weiter; };

struct REIHE_mon {
  OP coeff;
  struct REIHE_variablen *zeiger;
  struct REIHE_mon *ref; };

struct REIHE_poly {
  INT grad;
  struct REIHE_mon *unten;
  struct REIHE_poly *rechts; };

struct reihe {
  INT exist;
  INT reihenart;        /* Werte: -1,0,1 */
  INT z;                /* bei Operationen pot und transform */
  struct reihe *x,*y;   /* Zeiger auf Ursprung bei Verknuepfung */
  struct reihe *p;      /* zeigt auf Potenzenliste */
  INT (*eingabefkt)(struct reihe*,INT); /* zeiger auf Eingabefunktion */
  char ope;                  /* Operation */
  struct REIHE_poly *infozeig;  /* Zeiger auf Reihenglieder */
};

typedef struct reihe* REIHE_zeiger;


struct list { OP l_self; OP l_next; };

struct partition { OBJECTKIND pa_kind; OP pa_self; INT pa_hash;
  /* hashwert -1 falls nicht berechnet */ };
#define LASTPARTITION 1234
#define EXPONENT (OBJECTKIND)88
#define FROBENIUS (OBJECTKIND)92
#define LASTCOMP 1234L
#define LASTSUBSET 1234L
#define LAST_SUBSET 1234L

struct permutation { OBJECTKIND p_kind; OP p_self; };
#define LASTLEHMERCODE 12L
#define LASTPERMUTATION 13L
#define LAST_PERMUTATION 13L
#define LAST_FF (INT)170194
#define LASTSHUFFLE 12048802L
#define ZYKEL (OBJECTKIND)40888	  /* fuer zykelschreibweise */
#define BITREC (OBJECTKIND)230195 /* fuer bitvector rectrice */
#define BAR (OBJECTKIND)25	  /* fuer barred perm */
#define BARCYCLE (OBJECTKIND)26	  /* fuer barred perm */

struct monom { OP mo_self;  OP mo_koeff;  };

struct bruch { OP b_oben; OP b_unten; INT b_info; };
#define GEKUERZT 40892L
#define NGEKUERZT 408921L

struct matrix { OP m_length; OP m_height; OP m_self; INT m_hash; };
#define SINGULAER 2903884

struct skewpartition { OP spa_gross; OP spa_klein; };

struct tableaux { OP t_umriss;  OP t_self; };

struct symchar{ OP sy_werte; OP sy_parlist; OP sy_dimension; };

struct graph {  OBJECTKIND gr_kind; OP   gr_self; };
#define NACHBARLISTE (OBJECTKIND) 1

typedef struct { OP index, deg, poly, autos; } CYCLO_DATA;
typedef struct { OP index, deg, poly; } FIELD_DATA;
union data { CYCLO_DATA *c_data; FIELD_DATA *f_data; OP o_data; } ;
struct number { OP n_self; union data n_data; };

/* return value fuer insert */
#define INSERTEQ 301288  /* falls eq */
#define INSERTOK 3012881  /* falls insert */

#define BINOMLIMIT 13
extern INT binom_values[BINOMLIMIT][BINOMLIMIT];

#ifdef ALLTRUE
#define BINTREETRUE 1
#define BRUCHTRUE 1
#define CHARTRUE 1
#define CYCLOTRUE 1
#define DGTRUE 1
#define ELMSYMTRUE 1
#define FFTRUE 1
#define GRALTRUE 1
#define GRAPHTRUE 1
#define GRTRUE 1
#define HOMSYMTRUE 1
#define INTEGERTRUE 1
#define KOSTKATRUE 1
#define KRANZTRUE 1
#define LAURENTTRUE 1
#define LONGINTTRUE 1
#define MATRIXTRUE 1
#define MONOMIALTRUE 1
#define MONOPOLYTRUE 1
#define NUMBERTRUE 1
#define PARTTRUE 1
#define PERMTRUE 1
#define PLETTRUE 1
#define POLYTRUE 1
#define POWSYMTRUE 1
#define REIHETRUE 1
#define SABTRUE 1
#define SCHUBERTTRUE 1
#define SCHURTRUE 1
#define SHUFFLETRUE 1
#define SKEWPARTTRUE 1
#define SQRADTRUE 1
#define TABLEAUXTRUE 1
#define VECTORTRUE 1
#define WORDTRUE 1
#define WTTRUE 1
#define ZONALTRUE 1
#endif

#ifdef FFTRUE
#define VECTORTRUE 1
#endif

#ifdef GRTRUE
#define VECTORTRUE 1
#endif

#ifdef POLYTRUE
#define VECTORTRUE 1
#endif

#ifdef DGTRUE
#define SABTRUE 1
/* for gl-m reps */
#define MATRIXTRUE 1
#define CHARTRUE 1
#define PARTTRUE 1
#define NUMBERTRUE 1
#define TABLEAUXTRUE 1
#endif

#ifdef ZONALTRUE
#define KOSTKATRUE 1
#define CHARTRUE 1
#define MATRIXTRUE 1
#define POLYTRUE 1
#define PARTTRUE 1
#endif

#ifdef NUMBERTRUE
#define INTEGERTRUE 1
#define BRUCHTRUE 1
#define LISTTRUE 1
#define MONOMTRUE 1
#define SQRADTRUE 1
#define CYCLOTRUE 1
#define MONOPOLYTRUE 1
#endif

#ifdef PLETTRUE
#define SCHURTRUE 1
#define MATRIXTRUE 1
#define TABLEAUXTRUE 1
#define CHARTRUE 1
#endif

#ifdef SKEWPARTTRUE
#define PARTTRUE 1
#endif

#ifdef KOSTKATRUE
#define MATRIXTRUE 1
#define SCHURTRUE 1
#endif

#ifdef CHARTRUE
#define INTEGERTRUE 1
#define LONGINTTRUE 1
#define VECTORTRUE 1
#define PARTTRUE 1
#define MATRIXTRUE 1
#define SCHURTRUE 1
#define BRUCHTRUE 1
#define KOSTKATRUE 1
#define NUMBERTRUE 1
#define SQRADTRUE 1
#define CYCLOTRUE 1
#define MONOPOLYTRUE 1
#endif

#ifdef SCHUBERTTRUE
#define POLYTRUE 1
#define PARTTRUE 1
#define PERMTRUE 1
#define VECTORTRUE 1
#define INTEGERTRUE 1
#endif


#ifdef TABLEAUXTRUE
#define WORDTRUE 1
#define VECTORTRUE 1
#define MATRIXTRUE 1
#endif

#ifdef SCHURTRUE
#define BINTREETRUE 1
#define POLYTRUE 1
#define PARTTRUE 1
#define PERMTRUE 1
#define INTEGERTRUE 1
#define VECTORTRUE 1
#define SKEWPARTTRUE 1
#endif

#ifdef BINTREETRUE
#define INTEGERTRUE 1
#endif

#ifdef POLYTRUE
#define LISTTRUE 1
#define MONOMTRUE 1
#define VECTORTRUE 1
#endif

#ifdef PERMTRUE
#define PARTTRUE 1
#define INTEGERTRUE 1
#define VECTORTRUE 1
#endif
#ifdef PARTTRUE
#define INTEGERTRUE 1
#define VECTORTRUE 1
#endif

#ifdef VECTORTRUE
#define INTEGERTRUE 1
#endif



extern INT no_mem_check;

/* 0 == stored results will be used
 * 1 == stored results will not be used
 */
extern INT sym_no_results;

extern OP cons_eins;
extern OP cons_negeins;
extern OP cons_null;
extern OP cons_zwei;
extern OP cons_drei;
extern FILE *texout;
extern INT (*check_time_co)(void);
extern INT zeilenposition; /* position inside one row of stdout output */
extern INT row_length;     /* length of one outputrow */
extern INT tex_row_length; /* length of one tex outputrow */
extern INT integer_format; /* if > 0  number of positions for INTEGER output */
extern INT english_tableau;
extern INT kuerzen_yn;
extern INT texmath_yn; /* 1 in mathmode, 0 not in mathmode */
extern INT scanoutput_yn; /* 1 no output, 0 bitte output */
extern INT texposition;
extern INT doffset;
extern INT sym_background;
extern INT sym_www;
extern INT sym_timelimit;

extern INT freeall_speicherposition; /* global variable for callocobject/freeall */
extern INT freeall_speichersize;     /* global variable for callocobject/freeall */
extern OP *freeall_speicher;         /* global variable for callocobject/freeall */

#define SPEICHERSIZE (INT)10000

/* global variable for management of object space */
extern INT freeall_speichersize_max;

#ifdef LONGINTTRUE
extern struct ganzdaten gd; /* a global datastructure */
#endif

#define div SYM_div
#define DEF_H

/* prototypes */

INT B_W(OP basis,OP M, OP sym_dim, OP sn_dim);
INT Cdeg(OP C, OP stat);
INT Cgen(OP G, OP C);
INT Cosinus_eingabe(REIHE_zeiger root, INT anzahl);
INT E_eingabe(REIHE_zeiger root,  INT anzahl);
INT Exp_eingabe(REIHE_zeiger root, INT anzahl);
INT GaussRecInternal(INT po, INT m, INT n, OP res);
INT Ggen(OP G);
INT Kn_adjacency_matrix(OP n, OP a);
INT P_symmetrized_bideterminant(OP a, OP b, OP c);
INT Perm_eingabe(REIHE_zeiger root, INT anzahl);
INT R_roftableaux(OP w, OP r);
INT SYMMETRICA_EH(OP a, OP b);
INT SYMMETRICA_EM(OP a, OP b);
INT SYMMETRICA_EP(OP a, OP b);
INT SYMMETRICA_ES(OP a, OP b);
INT SYMMETRICA_HE(OP a, OP b);
INT SYMMETRICA_HM(OP a, OP b);
INT SYMMETRICA_HP(OP a, OP b);
INT SYMMETRICA_HS(OP a, OP b);
INT SYMMETRICA_ME(OP a, OP b);
INT SYMMETRICA_MH(OP a, OP b);
INT SYMMETRICA_MP(OP a, OP b);
INT SYMMETRICA_MS(OP a, OP b);
INT SYMMETRICA_PE(OP a, OP b);
INT SYMMETRICA_PH(OP a, OP b);
INT SYMMETRICA_PM(OP a, OP b);
INT SYMMETRICA_PS(OP a, OP b);
INT SYMMETRICA_SE(OP a, OP b);
INT SYMMETRICA_SH(OP a, OP b);
INT SYMMETRICA_SM(OP a, OP b);
INT SYMMETRICA_SP(OP a, OP b);
INT SYMMETRICA_bricknumber(OP umriss, OP cont, OP res);
INT SYM_sort(OP a);
INT SYM_sum(OP a, OP res);
INT S_a_rofword(OP w, OP a, OP r);
INT S_rofword(OP w, OP r);
INT Sinus_eingabe(REIHE_zeiger root, INT anzahl);
INT UD_permutation(OP a, OP b);
INT _homtest(OP a, OP b, OP m);
INT a_charvalue(OP rep, OP part, OP res);
INT a_charvalue_co(OP rep, OP part, OP res, INT index);
INT absolute(OP a, OP c);
INT absolute_bruch(OP a, OP b);
INT absolute_integervector(OP vec, OP res);
INT absolute_longint(OP a, OP b);
INT absolute_matrix(OP a, OP b);
INT absolute_vector(OP vec, OP res);
INT add(OP a, OP b, OP d);
INT add_adjacency_matrix(OP a, OP b, OP c);
INT add_apply(OP a, OP b);
INT add_apply_bruch(OP a, OP b);
INT add_apply_bruch_bruch(OP a, OP b);
INT add_apply_bruch_integer(OP a, OP b);
INT add_apply_bruch_scalar(OP a, OP b);
INT add_apply_cyclo(OP a, OP b);
INT add_apply_default(OP a, OP b);
INT add_apply_ff(OP a, OP b);
INT add_apply_gral(OP a, OP b);
INT add_apply_gral_gral(OP a, OP b);
INT add_apply_hashtable(OP a, OP b, INT (*eh)(OP,OP), INT (*ef)(OP,OP), INT (*hf)(OP));
INT add_apply_integer(OP a, OP b);
INT add_apply_integer_bruch(OP a, OP b);
INT add_apply_integer_integer(OP a, OP b);
INT add_apply_integer_longint(OP a, OP b);
INT add_apply_integervector(OP a, OP b);
INT add_apply_laurent(OP a, OP b);
INT add_apply_longint(OP a, OP b);
INT add_apply_longint_integer(OP a, OP b);
INT add_apply_longint_longint(OP a, OP b);
INT add_apply_matrix(OP a, OP b);
INT add_apply_matrix_matrix(OP a, OP b);
INT add_apply_monopoly(OP a, OP b);
INT add_apply_polynom(OP a, OP b);
INT add_apply_polynom_polynom(OP a, OP b);
INT add_apply_polynom_scalar(OP a, OP b);
INT add_apply_polynom_schubert(OP a, OP b);
INT add_apply_reihe(OP a, OP b);
INT add_apply_scalar_bruch(OP a, OP b);
INT add_apply_scalar_polynom(OP a, OP b);
INT add_apply_schubert(OP a, OP b);
INT add_apply_schubert_schubert(OP a, OP b);
INT add_apply_sqrad(OP a, OP b);
INT add_apply_symchar(OP a, OP b);
INT add_apply_symfunc(OP a, OP b);
INT add_apply_symfunc_symfunc(OP a, OP b);
INT add_apply_vector(OP a, OP b);
INT add_bruch(OP a, OP b, OP c);
INT add_bruch_bruch(OP a, OP b, OP c);
INT add_bruch_integer(OP a, OP b, OP c);
INT add_bruch_scalar(OP a, OP b, OP c);
INT add_cyclo(OP a, OP b, OP c);
INT add_cyclo_cyclo(OP a, OP b, OP c);
INT add_elmsym(OP a, OP b, OP c);
INT add_elmsym_elmsym(OP a, OP b, OP c);
INT add_ff(OP a, OP b, OP c);
INT add_galois(OP p1,OP p2, OP p3);
INT add_homsym(OP a, OP b, OP c);
INT add_homsym_homsym(OP a, OP b, OP c);
INT add_integer(OP a, OP b, OP c);
INT add_integer_integer(OP a, OP b, OP c);
INT add_integer_longint(OP a, OP b, OP c);
INT add_integervector(OP a, OP b, OP c);
INT add_koeff(OP a, OP b);
INT add_laurent(OP vc1, OP vc2, OP res);
INT add_longint(OP a, OP c, OP l);
INT add_longint_integer(OP a, OP c, OP l);
INT add_longint_longint(OP a, OP c, OP l);
INT add_matrix(OP a, OP b, OP c);
INT add_matrix_matrix(OP a, OP b, OP ergeb);
INT add_monom(OP a, OP b, OP c);
INT add_monom_schur(OP a, OP b, OP d);
INT add_monomial(OP a, OP b, OP c);
INT add_monomial_monomial(OP a, OP b, OP c);
INT add_monopoly(OP a, OP b, OP c);
INT add_monopoly_monopoly(OP a, OP b, OP c);
INT add_part_part(OP a, OP b, OP c);
INT add_partition(OP a, OP b, OP c);
INT add_polynom(OP a, OP b, OP c);
INT add_polynom_polynom(OP a, OP b, OP c);
INT add_powsym(OP a, OP b, OP c);
INT add_powsym_powsym(OP a, OP b, OP c);
INT add_reihe(OP a, OP b, OP c);
INT add_scalar_cyclo(OP a, OP b, OP c);
INT add_scalar_monopoly(OP a, OP b, OP c);
INT add_scalar_polynom(OP a, OP b, OP c);
INT add_scalar_sqrad(OP a, OP b, OP c);
INT add_schubert(OP a, OP b, OP c);
INT add_schubert_schubert(OP a, OP b, OP c);
INT add_schur(OP a, OP b, OP c);
INT add_schur_schur(OP a, OP b, OP c);
INT add_sqrad(OP a, OP b, OP c);
INT add_sqrad_sqrad(OP a, OP b, OP c);
INT add_staircase_part(OP a, OP n, OP b);
INT add_symchar(OP a, OP b, OP c);
INT add_vector(OP a, OP b, OP c);
INT addinvers(OP a, OP res);
INT addinvers_apply(OP a);
INT addinvers_apply_bruch(OP a);
INT addinvers_apply_cyclo(OP a);
INT addinvers_apply_elmsym(OP a);
INT addinvers_apply_ff(OP a);
INT addinvers_apply_galois(OP a);
INT addinvers_apply_hashtable(OP a);
INT addinvers_apply_homsym(OP a);
INT addinvers_apply_integer(OP a);
INT addinvers_apply_laurent(OP lau);
INT addinvers_apply_longint(OP a);
INT addinvers_apply_monom(OP a);
INT addinvers_apply_monomial(OP a);
INT addinvers_apply_monopoly(OP a);
INT addinvers_apply_polynom(OP a);
INT addinvers_apply_powsym(OP a);
INT addinvers_apply_schur(OP a);
INT addinvers_apply_sqrad(OP a);
INT addinvers_apply_symchar(OP a);
INT addinvers_apply_vector(OP vec);
INT addinvers_bruch(OP a, OP b);
INT addinvers_cyclo(OP a, OP b);
INT addinvers_ff(OP a, OP b);
INT addinvers_integer(OP a, OP b);
INT addinvers_longint(OP a, OP l);
INT addinvers_matrix(OP a, OP b);
INT addinvers_monom(OP a, OP b);
INT addinvers_monopoly(OP a, OP b);
INT addinvers_polynom(OP a, OP b);
INT addinvers_reihe(OP a, OP b);
INT addinvers_sqrad(OP a, OP b);
INT addinvers_symchar(OP a, OP c);
INT addinvers_vector(OP vec, OP res);
INT addtoallvectorelements(OP zahl, OP vector, OP res);
INT ak_make_alt_classes(OP n, OP res);
INT ak_make_alt_partitions(OP n, OP res);
INT ak_plet_phm_integer_partition_(OP a, OP b, OP c, OP f);
INT all_01_matrices(OP a, OP b, OP c);
INT all_irred_polynomials(OP n, OP q, OP res);
INT all_orbits(OP X, OP erz, OP bahnen, OP no, INT (*f)(OP,OP,OP));
INT all_orbits_set_rankf(INT (*f)(OP,OP));
INT all_orbits_set_trace(void);
INT all_orbits_unset_rankf(void);
INT all_orbits_unset_trace(void);
INT all_plactic_word(OP w, OP c);
INT all_points_phg(OP k, OP phg_c, OP phg_d, OP res);
INT all_ppoly(OP a, OP c, OP b);
INT alle_teiler(OP a, OP b);
INT allkostka(OP n);
INT alt_dimension(OP n, OP res);
INT alt_odg_trafo(OP part, OP D);
INT alt_sdg_trafo(OP part, OP D);
INT an_odg(OP part, OP perm, OP D);
INT an_rz_perm(OP per, OP res);
INT an_sdg(OP part, OP perm, OP D);
INT an_tafel(OP n, OP tafel);
INT an_trafo_odg(OP part, OP perm, OP D);
INT an_trafo_sdg(OP part, OP perm, OP D);
INT anfang(void);
INT append(OP a, OP b, OP e);
INT append_apply(OP a, OP b);
INT append_apply_part(OP a, OP b);
INT append_apply_vector(OP a, OP b);
INT append_behind_matrix_matrix(OP a, OP b, OP c);
INT append_below_matrix_matrix(OP a, OP b, OP c);
INT append_column_matrix(OP a, OP b, OP c);
INT append_part_part(OP a, OP b, OP c);
INT append_vector(OP a, OP b, OP c);
INT apply_INJDT(OP a, OP l, INT k, INT anz);
INT augpart(OP part);
INT b_d_sc(OP dim, OP ergebnis);
INT b_gk_spa(OP gross, OP klein, OP ergebnis);
INT b_i_pa(OP integer, OP res);
INT b_kl_pa(OBJECTKIND a, OP b, OP c);
INT b_ks_o(OBJECTKIND kind, OBJECTSELF self, OP object);
INT b_ks_p(OBJECTKIND kind, OP self, OP p);
INT b_ks_pa(OBJECTKIND kind, OP self, OP c);
INT b_ksd_n(OBJECTKIND kind, OP self, OP data, OP result);
INT b_l_nv(OP a, OP b);
INT b_l_v(OP length, OP a);
INT b_lh_m(OP l, OP h, OP m);
INT b_lh_nm(OP l, OP h, OP m);
INT b_lhs_m(OP len, OP height, OP self, OP res);
INT b_ls_v(OP length, OP self, OP res);
INT b_matrix_tableaux(OP mat, OP tab);
INT b_o_v(OP ob, OP vec);
INT b_ou_b(OP oben, OP unten, OP ergebnis);
INT b_pa_mon(OP part, OP schur);
INT b_pa_s(OP part, OP schur);
INT b_perm_vector_kranz(OP p, OP v, OP a);
INT b_s_po(OP self, OP poly);
INT b_scalar_elmsym(OP a, OP b);
INT b_scalar_homsym(OP a, OP b);
INT b_scalar_monomial(OP a, OP b);
INT b_scalar_powsym(OP a, OP b);
INT b_scalar_schur(OP a, OP b);
INT b_sk_mo(OP self, OP koeff, OP c);
INT b_skn_mp(OP s, OP k, OP n, OP e);
INT b_skn_po(OP a, OP b, OP c, OP d);
INT b_skn_s(OP a, OP b, OP c, OP d);
INT b_skn_sch(OP self, OP koeff, OP n, OP ergebnis);
INT b_sn_e(OP self, OP nx, OP a);
INT b_sn_h(OP self, OP nx, OP a);
INT b_sn_l(OP self, OP nx, OP a);
INT b_sn_mon(OP self, OP nx, OP a);
INT b_sn_po(OP self, OP nx, OP a);
INT b_sn_ps(OP self, OP nx, OP a);
INT b_sn_s(OP self, OP nx, OP a);
INT b_u_t(OP umriss, OP res);
INT b_us_t(OP umriss, OP self, OP res);
INT b_wpd_sc(OP wert, OP parlist, OP dim, OP ergebnis);
INT bar_rectr(OP a, OP v);
INT basis_mod_dg(OP prim, OP part, OP e);
INT bdg(OP part, OP perm, OP D);
INT bestimme_D(OP m, OP a, OP d_a);
INT bestimme_fixpunkt(OP G, OP C, OP Cdegrees, INT ind, OP weight, OP FP, OP Mg);
INT bestimme_konjugiertenklasse(OP propab, INT *ind, OP G, OP Orb);
INT bestimme_zufallsmatrizen(OP m, OP a, OP b);
INT bideterminant(OP a, OP b, OP c);
INT bideterminant_tableaux(OP a, OP b, OP c);
INT bideterminant_vector(OP a, OP b, OP c);
INT bilde_htupel(OP perm, OP tupel, OP htupel);
INT bin_ggt(OP a, OP b, OP c);
INT binom(OP oben, OP unten, OP d);
INT binom_small(OP oben, OP unten, OP d);
INT bit(OP a, INT i);
INT bit_longint(OP a, INT i);
INT brauer_char(OP sn, OP prime, OP bc);
INT bru_comp(OP a, OP c);
INT bruch_anfang(void);
INT bruch_ende(void);
INT bruch_not_scalar(OP a);
INT bruhat_comp_perm(OP a, OP b);
INT bruhat_ideal(OP a, OP b);
INT bruhat_ideal_strong(OP a, OP b);
INT bruhat_ideal_weak(OP a, OP b);
INT bruhat_interval_strong(OP a, OP b, OP c);
INT bruhat_interval_weak(OP a, OP b, OP c);
INT bruhat_rank_function(OP a, OP b);
INT build_lc(OP schizo, OP list);
INT build_propab_vector(OP propab, OP Cdeg, OP G, OP orb, OP Mg);
INT c_AUGPART_PARTITION(OP a);
INT c_CHARAUGPART_CHARPARTITION(OP a);
INT c_CHARPARTITION_CHARAUGPART(OP a);
INT c_PARTITION_AUGPART(OP a);
INT c_b_o(OP a, OP b);
INT c_b_u(OP a, OP b);
INT c_ff_ip(OP a, INT *b);
INT c_gr_k(OP a, OBJECTKIND c);
INT c_gr_s(OP a, OP c);
INT c_i_i(OP a, INT b);
INT c_i_n(OP mu, OP n, OP erg, OP tafel);
INT c_i_n_an(OP mu, OP n, OP erg, OP tafel);
INT c_ij_sn(OP a, OP b, OP c);
INT c_ijk_sn(OP a, OP b, OP c, OP g);
INT c_ijk_sn_tafel(OP a, OP b, OP c, OP g, OP ct);
INT c_kr_g(OP a, OP b);
INT c_kr_v(OP a, OP b);
INT c_l_n(OP a, OP b);
INT c_l_s(OP a, OP b);
INT c_m_h(OP a, OP b);
INT c_m_hash(OP a, INT b);
INT c_m_l(OP a, OP b);
INT c_m_s(OP a, OP b);
INT c_mo_k(OP a, OP b);
INT c_mo_s(OP a, OP b);
INT c_n_d(OP a, OP b);
INT c_n_s(OP a, OP b);
INT c_o_k(OP a, OBJECTKIND b);
INT c_o_s(OP a, OBJECTSELF b);
INT c_p_k(OP a, OBJECTKIND b);
INT c_p_s(OP a, OP b);
INT c_pa_hash(OP a, INT b);
INT c_pa_k(OP a, OBJECTKIND b);
INT c_pa_s(OP a, OP b);
INT c_s_n(OP a, OP b);
INT c_sc_d(OP a, OP b);
INT c_sc_p(OP a, OP b);
INT c_sc_w(OP a, OP b);
INT c_sch_n(OP a, OP b);
INT c_spa_g(OP a, OP b);
INT c_spa_k(OP a, OP b);
INT c_t_s(OP a, OP b);
INT c_t_u(OP a, OP b);
INT c_v_i(OP a, INT i, OP b);
INT c_v_l(OP a, OP b);
INT c_v_s(OP a, OP b);
INT calculate_fixed_point_number(OP a, OP b, OP mg);
OP callocobject(void);
INT callocobject_anfang(void);
INT callocobject_ende(void);
OP callocobject_fast(void);
INT cast_apply(OBJECTKIND k, OP a);
INT cast_apply_barperm(OP a);
INT cast_apply_bruch(OP a);
INT cast_apply_elmsym(OP a);
INT cast_apply_ff(OP a);
INT cast_apply_homsym(OP a);
INT cast_apply_integer(OP a);
INT cast_apply_matrix(OP a);
INT cast_apply_monom(OP a);
INT cast_apply_monomial(OP a);
INT cast_apply_monopoly(OP a);
INT cast_apply_part(OP a);
INT cast_apply_perm(OP a);
INT cast_apply_polynom(OP a);
INT cast_apply_powsym(OP a);
INT cast_apply_schubert(OP a);
INT cast_apply_schur(OP a);
INT cast_apply_tableaux(OP a);
INT cast_elmsym(OP a, OP b);
INT cast_homsym(OP a, OP b);
INT cast_monomial(OP a, OP b);
INT cast_powsym(OP a, OP b);
INT cast_schur(OP a, OP b);
INT cc_muir_mms_partition_partition_(OP a, OP b, OP c, OP f);
INT cc_plet_pes_integer_partition(OP a, OP b, OP c, OP f);
INT cc_plet_phs_integer_partition(OP a, OP b, OP c, OP f);
INT cc_plet_pss_integer_partition(OP a, OP b, OP c, OP f);
INT cc_plet_pss_partition_partition(OP a, OP b, OP c, OP f);
INT change_column_ij(OP a, INT i, INT j);
INT change_row_ij(OP a, INT i, INT j);
INT char_matrix_scalar_product(OP a, INT i, OP b, INT j, OP partvec, OP erg, OP convec);
INT character_polynom(OP a, OP b);
INT characteristik_symchar(OP a, OP b);
INT characteristik_to_symchar(OP a, OP b);
INT charakteristik_to_ypolynom(OP a, OP b, OP grad, OP ct);
INT charge_tableaux(OP a, OP b);
INT charge_word(OP a, OP b);
INT chartafel(OP a, OP b);
INT chartafel_bit(OP a, OP res);
INT chartafel_nonbit(OP a, OP res);
INT chartafel_partvector(OP a, OP erg, OP pv);
INT chartafel_symfunc(OP a, OP b);
INT charvalue(OP rep, OP part, OP res, OP tafel);
INT charvalue_bit(OP a, OP b, OP scv);
INT charvalue_tafel_part(OP rep, OP part, OP res, OP tafel, OP pv);
INT check_braid(OP mat1, OP mat2, OP p_root, INT flag);
INT check_commute(OP mat1, OP mat2, OP p_root, INT flag);
INT check_equal_2(OP a, OP b, INT (*f)(OP, OP), INT *e);
INT check_equal_2a(OP a, OP b, INT (*f)(OP, OP), INT *e);
INT check_equal_3(OP a, OP b, OP c, INT (*f)(OP, OP, OP), INT *e);
INT check_equal_4(OP a, OP b, OP c, OP d, INT (*f)(OP, OP, OP, OP), INT *e);
INT check_hecke_generators(OP vector, OP p_root, INT flag);
INT check_hecke_quadratic(OP mat, OP p_root, INT flag);
INT check_longint(OP a);
INT check_result_0(char *t, OP c);
INT check_result_1(OP a, char *t, OP c);
INT check_result_2(OP a, OP b, char *t, OP c);
INT check_result_3(OP a, OP b, OP d, char *t, OP c);
INT check_result_5(OP a, OP b, OP d, OP e, OP f, char *t, OP c);
INT check_time(void);
INT check_zeilenposition(FILE *f);
INT check_zero_matrix(OP mat, OP p_root);
INT class_bar(OP a, OP b);
INT class_label(OP gl, OP ge, OP res);
INT class_label_glnq(OP n, OP q, OP v);
INT class_label_glnq_co(OP n, OP q, OP v, OP pav);
INT class_mult(OP a, OP b, OP c);
INT class_mult_part_part(OP a, OP b, OP c);
INT class_mult_schur(OP a, OP b, OP c);
INT class_rep(OP gl, OP cl, OP res);
INT class_rep_bar(OP a, OP b);
INT class_rep_kranz(OP a, OP b);
INT clone_size_hashtable(OP a, INT b);
INT co_070295(OP m, OP p);
INT co_k_dimmod(signed char *bz, INT dim, INT pz);
INT co_polya3_sub(OP a, OP c, OP dd, OP b);
INT co_polya_sub(OP a, OP c, OP maxgrad, OP b);
INT co_zykelind_pglkq(OP k, OP q, OP ergeb);
INT code_mod_into_ord(OP prim, OP part, OP f);
INT code_mod_into_ord2(OP prim, OP part, OP f);
INT coeff_of_in(OP a, OP b, OP c);
INT column_standardise_tableau(OP tableau, INT col, INT *sig);
INT columns_standardise_tableau(OP tableau, INT *sig);
INT columnwordoftableaux(OP a, OP b);
INT comp(OP a, OP b);
INT comp_bigr_bigr(OP u, OP v);
INT comp_bigr_perm(OP u, OP perm);
INT comp_bruch(OP a, OP b);
INT comp_bruch_scalar(OP a, OP b);
INT comp_bv(OP a, OP b);
INT comp_colex_part(OP a, OP b);
INT comp_colex_schurmonom(OP a, OP b);
INT comp_colex_vector(OP a, OP b);
INT comp_cyclo(OP a, OP b);
INT comp_ff(OP a, OP b);
INT comp_galois(OP a, OP b);
INT comp_integer(OP a, OP b);
INT comp_integer_integer(OP a, OP b);
INT comp_integermatrix(OP a, OP b);
INT comp_integervector(OP a, OP b);
INT comp_kranztafel(OP a, OP b);
INT comp_lex_perm(OP a, OP b);
INT comp_list(OP a, OP b);
INT comp_list_co(OP a, OP b, INT (*cf)(OP,OP));
INT comp_longint(OP a, OP c);
INT comp_longint_integer(OP a, OP c);
INT comp_matrix(OP a, OP b);
INT comp_monom(OP a, OP b);
INT comp_monomelmsym(OP a, OP b);
INT comp_monomhomsym(OP a, OP b);
INT comp_monommonomial(OP a, OP b);
INT comp_monompowsym(OP a, OP b);
INT comp_monomschur(OP a, OP b);
INT comp_monomvector_monomvector(OP a, OP b);
INT comp_monopoly(OP a, OP b);
INT comp_number(OP a, OP b);
INT comp_numeric_vector(OP a, OP b);
INT comp_partition(OP a, OP b);
INT comp_partition_partition(OP a, OP b);
INT comp_permutation(OP a, OP b);
INT comp_permutation_pol(OP as, OP bs);
INT comp_polynom(OP a, OP b);
INT comp_polynom_scalar(OP a, OP b);
INT comp_reihe(OP a, OP b);
INT comp_skewpartition(OP a, OP b);
INT comp_skewpartition_skewpartition(OP a, OP b);
INT comp_sqrad(OP a, OP b);
INT comp_symchar(OP a, OP b);
INT comp_tableaux(OP a, OP b);
INT comp_vector(OP a, OP b);
INT comp_word(OP a, OP b);
INT complete_complete_plet(OP om, OP otab, OP ores);
INT complete_schur_plet(OP om, OP otab, OP res);
INT complex_conjugate(OP a, OP b);
INT compute_complete_with_alphabet(OP number, OP l, OP res);
INT compute_elmsym_with_alphabet(OP label, OP l, OP result);
INT compute_gl_c_ijk(OP gl, OP i, OP j, OP k, OP res);
INT compute_gl_charvalue(OP gl, OP il, OP cl, OP res);
INT compute_gl_cl_classorder(OP gl, OP cl, OP res);
INT compute_gl_il_dimension(OP gl, OP il, OP res);
INT compute_monomial_with_alphabet(OP number, OP l, OP res);
INT compute_power_with_alphabet(OP label, OP l, OP result);
INT compute_schur(OP part, OP res);
INT compute_schur_with_alphabet(OP part, OP l, OP res);
INT compute_schur_with_alphabet_det(OP a, OP b, OP c);
INT compute_skewschur_with_alphabet_det(OP a, OP b, OP c);
INT compute_zonal_with_alphabet(OP part, OP l, OP res);
INT conj_cyclo(OP a, OP b, OP c);
INT conj_sqrad(OP a, OP b, OP c);
INT conjugate(OP a, OP res);
INT conjugate_elmsym(OP a, OP b);
INT conjugate_homsym(OP a, OP b);
INT conjugate_monomial(OP a, OP b);
INT conjugate_partition(OP part, OP b);
INT conjugate_powsym(OP a, OP b);
INT conjugate_schur(OP a, OP b);
INT conjugate_tableaux(OP a, OP b);
INT consp_polynom(OP a);
INT contain_comp_part(OP a, OP b);
INT content(OP a, OP b);
INT content_polynom(OP a, OP b);
INT content_tableaux(OP a, OP content);
INT content_word(OP a, OP b);
INT convert_cyclo_scalar(OP a);
INT convert_radical_cyclo(OP a, OP b);
INT convert_sqrad_cyclo(OP a, OP b);
INT convert_sqrad_scalar(OP a);
INT copy(OP a, OP b);
INT copy_bintree(OP a, OP b);
INT copy_bitvector(OP vec, OP res);
INT copy_bruch(OP von, OP nach);
INT copy_composition(OP vec, OP res);
INT copy_elmsym(OP a, OP b);
INT copy_ff(OP a, OP b);
INT copy_galois(OP vec, OP res);
INT copy_graph(OP a, OP b);
INT copy_hashtable(OP a, OP b);
INT copy_homsym(OP a, OP b);
INT copy_integer(OP a, OP c);
INT copy_integermatrix(OP a, OP b);
INT copy_integervector(OP vec, OP res);
INT copy_kranz(OP vec, OP res);
INT copy_kranztypus(OP a, OP b);
INT copy_laurent(OP vec, OP res);
INT copy_list(OP von, OP nach);
INT copy_longint(OP a, OP c);
INT copy_matrix(OP von, OP b);
INT copy_monom(OP a, OP b);
INT copy_monomial(OP a, OP b);
INT copy_number(OP a, OP b);
INT copy_partition(OP a, OP b);
INT copy_permutation(OP a, OP b);
INT copy_polynom(OP a, OP b);
INT copy_powsym(OP a, OP b);
INT copy_queue(OP vec, OP res);
INT copy_reihe(OP a, OP b);
INT copy_schur(OP a, OP b);
INT copy_skewpartition(OP a, OP b);
INT copy_subset(OP vec, OP res);
INT copy_symchar(OP a, OP b);
INT copy_tableaux(OP a, OP b);
INT copy_vector(OP vec, OP res);
INT copy_word(OP vec, OP res);
INT cyclic_tafel(OP a, OP b);
INT cyclo_an_tafel(OP a, OP c);
INT cyclo_odg(OP a, OP b, OP c);
INT debruijn_all_functions(OP a, OP b, OP c);
INT debruijn_inj_functions(OP a, OP b, OP c);
INT debugprint(OP a);
INT debugprint_ff(OP a);
INT debugprint_longint(OP a);
INT debugprint_object(OP a);
INT debugprint_reihe(OP a);
INT dec(OP a);
INT dec_integer(OP a);
INT dec_integervector(OP a);
INT dec_longint(OP a);
INT dec_partition(OP a);
INT dec_permutation(OP a);
INT dec_vector(OP a);
INT decp_mat(OP sn, OP prime, OP dmat);
INT decreasingp_vector(OP a);
INT degree_monopoly(OP mp, OP dg);
INT degree_polynom(OP a, OP b);
INT delete_column_matrix(OP a, INT index, OP b);
INT delete_entry_vector(OP a, INT index, OP b);
INT delete_row_matrix(OP a, INT index, OP b);
INT derivative(OP pol, OP pold);
INT det(OP a, OP b);
INT det270588(OP mat, OP perm, OP c);
INT det_imm_matrix(OP mat, OP b);
INT det_mat_imm(OP mat, OP erg);
INT det_mat_tri(OP a, OP res);
INT det_matrix(OP a, OP b);
INT dg_mp(OP mp, OP dg);
INT diagramm_permutation(OP perm, OP mat);
INT dimension(OP n, OP d);
INT dimension_augpart(OP a, OP b);
INT dimension_bit(OP a, OP b);
INT dimension_mod(OP part, OP prim, OP res);
INT dimension_partition(OP a, OP b);
INT dimension_schubert(OP sb, OP res);
INT dimension_schur(OP a, OP b);
INT dimension_skewpartition(OP a, OP b);
INT dimension_symmetrization(OP m, OP part, OP dim);
INT dimino(OP elm);
INT display(OP obj);
INT display_schubert(OP a);
INT div(OP a, OP b, OP c);
INT div_apply(OP a, OP b);
INT div_apply_integer(OP a, OP b);
INT div_default(OP a, OP b, OP d);
INT divdiff(OP a, OP b, OP c);
INT divdiff_bar(OP a, OP b, OP c);
INT divdiff_perm_schubert(OP perm, OP sb, OP res);
INT divdiff_schubert(OP a, OP schub, OP res);
INT divideddiff_lc(OP lc, OP poly, OP c);
INT divideddiff_permutation(OP perm, OP poly, OP c);
INT divideddiff_rz(OP rzt, OP poly, OP ergebnis);
INT divideddiff_rz_bar(OP rzt, OP poly, OP c);
INT divideddifference(OP i, OP poly, OP c);
INT divideddifference_bar(OP i, OP poly, OP c);
INT dixon_wilf_transversal(OP G, OP weight, OP anz, OP FP);
INT dom_comp_part(OP a, OP b);
INT double_apply(OP a);
INT double_apply_default(OP a);
INT double_apply_longint(OP a);
INT double_hashtable(OP b, INT (*hf)(OP));
INT durfee_size_part(OP a, OP b);
INT dynamicp(OP a);
INT eins(OP a, OP b);
INT eins_default(OP a, OP b);
INT eins_ff(OP a, OP b);
INT eins_ff_given_q(OP q, OP b);
INT eins_galois(OP a,OP b);
INT eins_gr_given_c_d(OP c, OP d, OP gr);
INT einsp(OP a);
INT einsp_bitvector(OP vec);
INT einsp_bruch(OP a);
INT einsp_cyclotomic(OP a);
INT einsp_ff(OP a);
INT einsp_galois(OP g);
INT einsp_integer(OP a);
INT einsp_integervector(OP a);
INT einsp_kranz(OP a);
INT einsp_longint(OP a);
INT einsp_matrix(OP a);
INT einsp_monopoly(OP a);
INT einsp_permutation(OP a);
INT einsp_polynom(OP a);
INT einsp_reihe(OP a);
INT einsp_schubert(OP a);
INT einsp_sqrad(OP a);
INT einsp_symchar(OP a);
INT einsp_symfunc(OP p);
INT einsp_vector(OP a);
INT elementarp_permutation(OP a, OP b);
INT elementary_schur_plet(OP om, OP otab, OP ores);
INT embedding_mod_into_ord(OP prim, OP part, OP f);
INT empty_listp(OP a);
INT empty_object(char *t);
INT emptyp(OP a);
INT en_forme(OP ma);
INT ende(void);
INT enter_list_to_matrix(OP matrix, INT column, OP standard, OP express);
INT eq(OP a, OP b);
INT eq_cyclotomic(OP a, OP b);
INT eq_fieldobject_int(OBJECTKIND type, OP a, INT i);
INT eq_integer(OP a, OP b);
INT eq_integervector_integervector(OP a, OP b);
INT eq_longint_longint(OP a, OP b);
INT eq_matrix(OP a, OP b);
INT eq_monomsymfunc(OP a, OP b);
INT eq_monomsymfunchash(OP a, OP b);
INT eq_partition(OP a, OP b);
INT eq_partition_partition(OP a, OP b);
INT eq_permutation(OP a, OP b);
INT eq_sqrad(OP a, OP b);
INT eq_vector(OP a, OP b);
INT equal_2_error(void);
INT equal_parts(OP a, OP b);
INT eqv(OP a,OP b);
INT error(char *fehlertext);
INT error_during_computation(char *t);
INT error_during_computation_code(char *t, INT code);
INT euler_phi(OP a, OP b);
INT eval_2schubert(OP a, OP vec, OP b);
INT eval_char_polynom(OP poly, OP vec, OP res);
INT eval_monopoly(OP a, OP b, OP c);
INT eval_polynom(OP poly, OP vec, OP res);
INT eval_polynom_dir_prod(OP a, OP v, OP c);
INT even(OP a);
INT even_integer(OP a);
INT even_longint(OP a);
INT even_partition(OP a);
INT even_permutation(OP a);
INT exchange_alphabets(OP a, OP b);
INT exor_bitvector_apply(OP bit1, OP res);
INT factorize(OP a, OP b);
INT factorize_integer(OP a, OP b);
INT fakul(OP n, OP d);
INT fakul_longintresult(OP n, OP res);
INT fastrectr(OP a, OP v);
void fatal_error(char *fehlertext);
INT ferrers(OP obj);
INT ferrers_partition(OP part);
INT ferrers_skewpartition(OP a);
INT ff_anfang(void);
INT ff_ende(void);
INT fill_left_down_matrix(OP b);
INT filter_apply_hashtable(OP a, INT (*f)(OP));
INT filter_apply_list(OP a, INT (*tf)(OP));
INT filter_list(OP a, OP b, INT (*tf)(OP));
OP find(OP a, OP b);
OP find_1result_hashtable(OP a, OP h);
OP find_2result_hashtable(OP a, OP b, OP h);
OP find_bintree(OP a, OP b);
OP find_hashtable(OP a, OP b, INT (*ef)(OP,OP), INT (*hf)(OP));
INT find_knuth_tab_entry(OP P, OP Q, OP b, INT *i, INT *j);
OP find_monomial(OP a, OP b);
INT find_non_root_standard_pos(OP tableau);
INT find_non_rowstandard_pos(OP tableau, INT *r, INT *c);
OP find_schur(OP a, OP b);
INT find_tab_entry(OP tab, OP b, INT *i, INT *j);
OP find_teh_integer(OP a);
OP find_tem_integer(OP a);
OP find_tep_integer(OP a);
OP find_the_integer(OP a);
OP find_thm_integer(OP a);
OP find_thp_integer(OP a);
OP find_tme_integer(OP a);
OP find_tmh_integer(OP a);
OP find_tpe_integer(OP a);
OP find_tph_integer(OP a);
OP find_user_bintree(OP a, OP b, INT (*f)(char*,char*));
OP find_vector(OP a, OP b);
OP findmax_elmsym(OP a, INT (*cf)(OP,OP));
OP findmax_homsym(OP a, INT (*cf)(OP,OP));
OP findmax_monomial(OP a, INT (*cf)(OP,OP));
OP findmax_powsym(OP a, INT (*cf)(OP,OP));
OP findmax_schur(OP a, INT (*cf)(OP,OP));
OP findmax_vector(OP vec);
OP findmin_elmsym(OP a, INT (*cf)(OP,OP));
OP findmin_homsym(OP a, INT (*cf)(OP,OP));
OP findmin_monomial(OP a, INT (*cf)(OP,OP));
OP findmin_powsym(OP a, INT (*cf)(OP,OP));
OP findmin_schur(OP a, INT (*cf)(OP,OP));
INT first(OBJECTKIND kind, OP res, OP para_eins);
INT first_bar(OP a, OP b);
INT first_composition(OP w, OP parts, OP c);
INT first_ff(OP a, OP b, OP c);
INT first_ff_given_q(OP q, OP c);
INT first_gr_given_c_d(OP c, OP d, OP gr);
INT first_kranztypus(OP w, OP parts, OP c);
INT first_lehmercode(OP l, OP res);
INT first_lex_tableaux(OP a, OP b);
INT first_part_EXPONENT(OP n, OP part);
INT first_part_VECTOR(OP n, OP part);
INT first_partition(OP n, OP part);
INT first_perm_n_invers(OP a, OP b, OP c);
INT first_permutation(OP l, OP res);
INT first_prime_factor(OP a, OP first_prime);
INT first_subset(OP n, OP k, OP c);
INT first_tab_perm(OP a, OP c);
INT first_tableaux(OP a, OP b);
INT fprint(FILE *of, OP obj);
INT fprint_bintree(FILE *fp, OP a);
INT fprint_bitvector(FILE *fp, OP a);
INT fprint_bruch(FILE *a, OP b);
INT fprint_ff(FILE *f, OP a);
INT fprint_graph(FILE *f, OP a);
INT fprint_hashtable(FILE *f, OP h);
INT fprint_integer(FILE *f, OP a);
INT fprint_list(FILE *f, OP list);
INT fprint_longint(FILE *f, OP l);
INT fprint_matrix(FILE *f, OP obj);
INT fprint_monom(FILE *f, OP monom);
INT fprint_number(FILE *f, OP n);
INT fprint_partition(FILE *f, OP partobj);
INT fprint_permutation(FILE *f, OP a);
INT fprint_queue(FILE *fp, OP q);
INT fprint_reihe(FILE *f, OP a);
INT fprint_skewpartition(FILE *f, OP a);
INT fprint_symchar(FILE *fp, OP a);
INT fprint_tableaux(FILE *fp, OP a);
INT fprint_vector(FILE *f, OP vecobj);
INT fprintln(FILE *f, OP obj);
INT free_cyclotomic_parameters(void);
INT free_root_parameters(void);
INT free_useful_monopolies(void);
INT freeall(OP a);
INT freemonom(struct monom *v);
INT freepartition(struct partition *d);
INT freeself(OP a);
INT freeself_bintree(OP a);
INT freeself_bitvector(OP a);
INT freeself_bruch(OP bruch);
INT freeself_ff(OP a);
INT freeself_galois(OP a);
INT freeself_graph(OP a);
INT freeself_hashtable(OP vec);
INT freeself_integer(OP a);
INT freeself_integermatrix(OP a);
INT freeself_integervector(OP a);
INT freeself_kranz(OP a);
INT freeself_kranztypus(OP a);
INT freeself_laurent(OP vec);
INT freeself_list(OP obj);
INT freeself_longint(OP a);
INT freeself_matrix(OP matrix);
INT freeself_monom(OP a);
INT freeself_number(OP n);
INT freeself_partition(OP a);
INT freeself_permutation(OP a);
INT freeself_reihe(OP a);
INT freeself_skewpartition(OP a);
INT freeself_symchar(OP a);
INT freeself_tableaux(OP a);
INT freeself_vector(OP vec);
INT freevectorstruct(struct vector *v);
INT frip_latex_zykelind(OP a);
INT frobenius_elmsym(OP a, OP b);
INT frobenius_homsym(OP a, OP b);
INT frobenius_monomial(OP a, OP b);
INT frobenius_powsym(OP a, OP b);
INT frobenius_schur(OP a, OP b);
INT fusedmemory(FILE *fn, char *stelle);
INT galois_anfang(void);
INT galois_ende(void);
INT ganzdiv(OP a, OP b, OP c);
INT ganzdiv_apply(OP a, OP b);
INT ganzdiv_apply_integer(OP a, OP b);
INT ganzdiv_apply_longint(OP a, OP b);
INT ganzdiv_apply_longint_integer(OP a, OP b);
INT ganzdiv_apply_longint_longint(OP a, OP b);
INT ganzdiv_integer(OP a, OP b, OP c);
INT ganzdiv_integer_integer(OP a, OP b, OP c);
INT ganzdiv_integer_longint(OP a, OP b, OP c);
INT ganzdiv_longint(OP a, OP b, OP c);
INT ganzdiv_longint_integer(OP a, OP b, OP c);
INT ganzdiv_longint_longint(OP a, OP b, OP c);
INT ganzsquareroot(OP a, OP b);
INT ganzsquareroot_integer(OP a, OP b);
INT ganzsquareroot_longint(OP a, OP b);
INT garnir(OP f, OP g, OP h, OP c);
INT gauss_polynom(OP m, OP n, OP pol);
INT gauss_schubert_polynom(OP a, OP b, OP c);
INT gcd_ex(OP a, OP b, OP c, OP d, OP e);
INT gcd_int_po(OP n, OP po, OP pg);
INT gcd_mp(OP a, OP b, OP c);
INT gcd_mp_lent(OP a, OP b, OP c);
INT ge(OP a, OP b);
INT gen_mat(OP part, INT index, INT ref, OP res);
INT gen_smat(OP part, INT index, INT ref, OP res);
INT generate_root_tableaux(OP partition, OP p_root, OP std);
INT generate_standard_tableaux(OP partition, OP std);
INT generators_glnq(OP n, OP p, OP k, OP v);
INT generators_slnq(OP n, OP p, OP k, OP v);
INT gengroup(OP vec);
INT get_ax_dist(OP tab, INT r, INT s, OP res);
INT get_bv_i(OP a, INT i);
INT get_ff_irred(OP p , OP deg, OP pol);
INT get_galois_irred(OP g, OP ip);
INT get_incidence_phg(OP k, OP phg_c, OP phg_d, OP erz, OP matrix, OP bahnsizes, OP eindim, OP eindimbahnen, OP hyper, OP hyperbahnen);
INT get_index(OP tab, OP vector);
INT get_level_vector_of_verband(OP a, INT (*lf)(OP,OP), OP b, OP c);
INT get_orb_rep(OP G, OP m, OP n, OP L, OP len, INT konstr);
INT get_perm(OP w, OP p, OP b, INT n, INT m, INT ind, OP perm_vec, OP ww, OP fix);
INT get_position(OP tab, INT r, OP res);
INT get_tex_polynom_parameter(INT a);
INT get_time(OP a);
INT ggt(OP a, OP b, OP c);
INT ggt_field_polynom(OP a, OP b, OP c);
INT ggt_i(INT i, INT j);
INT ggt_integer(OP a, OP b, OP c);
INT ggt_integer_integer(OP a, OP b, OP d);
INT ggt_integer_integer_slow(OP a, OP b, OP c);
INT ggt_integer_longint(OP a, OP b, OP d);
INT ggt_integer_slow(OP a, OP b, OP c);
INT ggt_longint(OP a, OP b, OP c);
INT ggt_longint_integer(OP a, OP b, OP c);
INT ggt_longint_longint(OP a, OP b, OP d);
INT ggt_longint_longint_sub(OP a, OP b, OP c);
INT ggt_polynom(OP a, OP b, OP c);
INT giambelli_matrix(OP a, OP b);
INT gl_character(OP n, OP partition, OP character);
INT gl_dimension(OP n, OP partition, OP dim);
INT gl_tableaux(OP n, OP partition, OP list);
INT glm_B_W(OP m, OP n, OP B, OP D);
INT glm_get_BV(OP PROJ, OP B, OP count);
INT glm_homtest(OP m, OP d);
INT glm_sab(OP m, OP n, OP B, OP part);
INT glmndg(OP m, OP n, OP M, INT var);
INT glpdg(OP m, OP part, OP D);
INT gr(OP a, OP b);
INT gram_schmidt(OP a);
INT grf_An(OP gr, OP n, OP res);
INT grf_Cn(OP gr, OP n, OP res);
INT grf_Dn(OP gr, OP n, OP res);
INT grf_Sn(OP gr, OP n, OP res);
INT grf_arb(OP gr, OP n, OP res);
INT group_gen(OP S, OP SMat, OP D, OP Di);
INT grouporder_kranz(OP l, OP a);
INT growingorder_schur(OP a);
INT gt(OP a, OP b);
INT gupta_nm(OP n, OP m, OP res);
INT gupta_nm_speicher(OP n, OP m, OP res);
INT gupta_tafel(OP mx, OP mat);
INT half_apply(OP a);
INT half_apply_longint(OP a);
INT hall_littlewood(OP a, OP b);
INT hall_littlewood_alt(OP a, OP b);
INT hall_littlewood_dij(OP a, OP b, INT i, INT j);
INT hall_littlewood_tafel(OP a, OP b);
INT has_one_variable(OP a);
INT hash(OP a);
INT hash_ende(void);
INT hash_ff(OP a);
INT hash_integervector(OP a);
INT hash_list(OP list);
INT hash_matrix(OP a);
INT hash_monompartition(OP a);
INT hash_partition(OP a);
INT hash_skewpartition(OP a);
INT hashv(OP v);
INT hecke_action_lc_on_lc(OP tableaux, OP hecke, OP result);
INT hecke_action_perm_on_hecke(OP heck, OP permutation);
INT hecke_action_perm_on_lc(OP tableaux, OP permutation);
INT hecke_add(OP hecke1, OP hecke2, OP result);
INT hecke_dg(OP part, OP perm, OP res);
INT hecke_generator_reps(OP partition, OP vector);
INT hecke_mult(OP hecke1, OP hecke2, OP result);
INT hecke_root_generator_reps(OP partition, OP p_root, OP vector);
INT hecke_scale(OP hecke, OP power, OP coeff);
INT hfix_in_ww(OP fix, OP ww);
INT hoch(OP a, OP b, OP c);
INT hoch_bruch(OP a, OP b, OP c);
INT hoch_bruch_integer(OP a, OP b, OP c);
INT hoch_bruch_longint(OP a, OP b, OP c);
INT hoch_default(OP basis, OP expon, OP ergeb);
INT hoch_integer(OP a, OP b, OP c);
INT hoch_integer_integer(OP a, OP b, OP c);
INT hoch_integer_longint(OP a, OP b, OP c);
INT hoch_longint(OP a, OP b, OP c);
INT hoch_longint_integer(OP a, OP b, OP c);
INT hoch_longint_longint(OP a, OP b, OP c);
INT hook_diagramm(OP p, OP m);
INT hook_length(OP p, INT i, INT j, OP b);
INT hook_length_augpart(OP p, INT i, INT j, OP res);
INT hook_part(OP par, OP res);
INT hook_partition(OP a, INT i, INT j, OP b);
INT hookp(OP a);
INT horizontal_sum(OP n, OP a);
INT hplus(OP tab, OP h);
INT idempotent(OP tab, OP idp);
INT immanente_matrix(OP mat, OP part, OP res);
INT inc(OP a);
INT inc_bitvector(OP v);
INT inc_integer(OP a);
INT inc_longint(OP a);
INT inc_matrix(OP a);
INT inc_matrix_column_co(OP a, INT k);
INT inc_matrix_row_co(OP a, INT k);
INT inc_partition(OP a);
INT inc_permutation(OP perm);
INT inc_reihe(OP a);
INT inc_tableaux(OP tab);
INT inc_vector(OP a);
INT inc_vector_co(OP a, INT r);
INT index_galois(OP g);
INT index_vector(OP a, OP b);
INT index_vector_binary(OP a, OP b);
INT indexofpart(OP part);
INT inf_bitvector(OP bit1, OP bit2, OP res);
INT inf_bitvector_apply(OP bit1, OP res);
INT init(OBJECTKIND kind, OP a);
INT init_bintree(OP a);
INT init_cyclo(OP a);
INT init_elmsym(OP a);
INT init_galois_global( OP charac, OP deg );
INT init_hall_littlewood(OP a, OP b);
INT init_hashtable(OP a);
INT init_homsym(OP a);
INT init_kostka(OP n, OP koma, OP vector);
INT init_kranz(OP a);
INT init_longint(OP l);
INT init_monomial(OP a);
INT init_polynom(OP a);
INT init_powsym(OP a);
INT init_queue(OP q);
INT init_reihe(OP a);
INT init_schur(OP a);
INT init_size_hashtable(OP a, INT b);
INT init_sqrad(OP a);
INT inner_tensor_sc(OP a, OP b, OP c);
INT innermaxmofn(OP m, OP n, OP erg);
INT input_glmn(OP m, OP n, OP S, OP SMat, INT var);
INT input_lc_permutations(OP save);
INT input_tableau(OP partit, OP tab);
INT insert(OP a, OP c, INT (*eh)(OP, OP), INT (*cf)(OP, OP));
INT insert_bintree(OP a, OP bt, INT (*eh)(OP,OP), INT (*cf)(OP,OP));
INT insert_bt_bt(OP a, OP bt, INT (*eh)(OP,OP), INT (*cf)(OP,OP));
INT insert_elmsym_hashtable(OP a, OP b, INT (*eh)(OP,OP), INT (*cf)(OP,OP), INT (*hf)(OP));
INT insert_entry_vector(OP a, INT index, OP b);
INT insert_hashtable(OP a, OP b, INT (*eh)(OP,OP), INT (*cf)(OP,OP), INT (*hf)(OP));
INT insert_hashtable_hashtable(OP a, OP b, INT (*eh)(OP,OP), INT (*cf)(OP,OP), INT (*hf)(OP));
INT insert_homsym_hashtable(OP a, OP b, INT (*eh)(OP,OP), INT (*cf)(OP,OP), INT (*hf)(OP));
INT insert_list(OP von, OP nach, INT (*eh)(OP,OP), INT (*cf)(OP,OP));
INT insert_list_list(OP von, OP nach, INT (*eh)(OP,OP), INT (*cf)(OP,OP));
INT insert_list_list_2(OP von, OP nach, INT (*eh)(OP,OP), INT (*cf)(OP,OP));
INT insert_monomial_hashtable(OP a, OP b, INT (*eh)(OP,OP), INT (*cf)(OP,OP), INT (*hf)(OP));
INT insert_powsym_hashtable(OP a, OP b, INT (*eh)(OP,OP), INT (*cf)(OP,OP), INT (*hf)(OP));
INT insert_scalar_hashtable(OP a, OP b, INT (*eh)(OP,OP), INT (*ef)(OP,OP), INT (*hf)(OP));
INT insert_schur_hashtable(OP a, OP b, INT (*eh)(OP,OP), INT (*cf)(OP,OP), INT (*hf)(OP));
INT integer_factor(OP a, OP l);
INT integer_factors_to_integer(OP l, OP a);
INT intlog(OP a);
INT intlog_int(INT ai);
INT intlog_longint(OP a);
INT invers(OP a, OP b);
INT invers_POLYNOM(OP a, OP b);
INT invers_apply(OP a);
INT invers_apply_bruch(OP a);
INT invers_apply_ff(OP a);
INT invers_apply_integer(OP a);
INT invers_apply_longint(OP l);
INT invers_bar(OP a, OP b);
INT invers_bitvector(OP vec, OP res);
INT invers_bruch(OP a, OP b);
INT invers_cyclo(OP a, OP b);
INT invers_ff(OP a, OP b);
INT invers_galois(OP a, OP b);
INT invers_integer(OP a, OP b);
INT invers_kostka_tafel(OP a, OP b);
INT invers_kranz(OP a, OP b);
INT invers_laurent(OP lau, OP res);
INT invers_longint(OP a, OP c);
INT invers_matrix(OP a, OP b);
INT invers_monopoly(OP lau, OP res);
INT invers_permutation(OP perm, OP b);
INT invers_polynom(OP a, OP b);
INT invers_sqrad(OP a, OP b);
INT inverse_jeudetaquin_tableaux(OP a, INT si, INT sj, OP b);
INT inverse_nilplactic_jeudetaquin_tableaux(OP a, INT si, INT sj, OP b);
INT inversion_matrix_perm(OP p, OP e);
INT inversordcen(OP part, OP ergeb);
INT is_graphical(OP a);
INT is_scalar_polynom(OP a);
INT is_scalar_reihe(OP c);
INT is_selfconjugate(OP part);
INT jacobi(OP a, OP b, OP c);
INT jacobitrudimatrix(OP a, OP b);
INT jeudetaquin_tableaux(OP a, OP b);
INT johnson_graph_adjacency_matrix(OP a, OP b, OP c, OP m);
INT kgv(OP p1, OP second, OP d);
INT kk_280604(OP part, OP e, OP prim);
INT knuth_row_delete_step(OP raus, OP qraus, OP P, OP Q);
INT knuth_row_insert_step(OP rein, OP qrein, OP P, OP Q);
INT knuth_twoword(OP a, OP b, OP cc, OP dd);
INT konj_gral_perm(OP gral, OP perm, OP res);
INT konj_perm_perm(OP perm, OP konj, OP res);
INT konjugation(OP gral, OP tab, INT i, OP d);
INT konjugation2(OP gral, OP perm, OP res);
INT konjugierende(OP t, INT i, OP cp);
INT kostka_character(OP a, OP b);
INT kostka_number(OP inh, OP shape, OP res);
INT kostka_number_partition(OP a, OP b, OP c);
INT kostka_number_skewpartition(OP a, OP b, OP c);
INT kostka_tab(OP shape, OP content, OP c);
INT kostka_tafel(OP a, OP b);
INT kranztafel(OP a, OP b, OP kt, OP d, OP h);
INT kranztypus_charakteristik(OP a, OP b);
INT kranztypus_kranztypus_monom(OP a, OP b, OP c);
INT kranztypus_to_matrix(OP a, OP b);
INT kronecker(OP a, OP b, OP c);
INT kronecker_product(OP a, OP b, OP c);
INT krz(OP fc3);
INT kuerzen(OP bruch);
INT kuerzen_integer_integer(OP bruch);
INT kuerzen_integer_longint(OP bruch);
INT kuerzen_integral(OP bruch);
INT kuerzen_longint_integer(OP bruch);
INT kuerzen_longint_longint(OP bruch);
INT kung_formel(OP d, OP lambda, OP q, OP anz);
INT l_complete_complete_plet(OP lgo, OP om, OP c, OP ores);
INT l_complete_schur_plet(OP olng, OP b, OP c, OP res);
INT l_elementary_schur_plet(OP olng, OP b, OP c, OP res);
INT l_outerproduct_schur_lrs(OP le, OP pa, OP pb, OP c);
INT l_power_schur_plet(OP ol, OP a, OP b, OP c);
INT l_powerproduct_schur_plet(OP ol, OP a, OP b, OP c);
INT l_schur_power_schur_plet_mult(OP ol, OP a, OP b, OP c, OP d);
INT l_schur_powerproduct_schur_plet_mult(OP ol, OP a, OP b, OP c, OP d);
INT l_schur_schur_plet(OP a, OP b, OP c, OP res);
INT l_schur_schur_pletbis(OP ol, OP a, OP b, OP c);
INT lagrange_polynom(OP a, OP b, OP c);
INT last_lehmercode(OP l, OP res);
INT last_part_EXPONENT(OP n, OP part);
INT last_part_VECTOR(OP n, OP part);
INT last_partition(OP n, OP part);
INT last_permutation(OP l, OP ree);
INT lastof(OP a, OP res);
INT lastof_integervector(OP a, OP b);
INT lastof_partition(OP a, OP b);
INT lastof_skewpartition(OP a, OP b);
INT lastof_vector(OP a, OP b);
INT lastp(OP a);
INT lastp_list(OP list);
INT latex_glm_dar(OP M);
INT latex_kranztafel(OP h, OP g, OP d);
INT latex_line(INT vonx, INT vony, INT nachx, INT nachy);
INT latex_verband(OP a);
INT latticepword(OP w);
INT ldcf_monopoly(OP mp, OP ld);
INT ldcf_mp(OP mp, OP ld);
INT le(OP a, OP b);
INT lehmercode(OP a, OP b);
INT lehmercode2_permutation(OP perm, OP vec);
INT lehmercode_bar(OP a, OP b);
INT lehmercode_permutation(OP perm, OP vec);
INT lehmercode_tableaux(OP a, OP b);
INT lehmercode_vector(OP vec, OP b);
INT lehmercode_vector_bar(OP a, OP b);
INT length(OP a, OP d);
INT length_bar(OP a, OP b);
INT length_bintree(OP a, OP b);
INT length_comp_part(OP a, OP b);
INT length_list(OP list, OP res);
INT length_partition(OP a, OP b);
INT length_permutation(OP a, OP b);
INT length_reihe(OP a, OP b);
INT length_skewpartition(OP a, OP b);
INT length_vector(OP a, OP b);
INT list_anfang(void);
INT list_ende(void);
INT listp(OP a);
INT longint_ende(void);
INT lt(OP a, OP b);
INT lyndon_orb(OP G, OP FP, OP len);
INT m_INTEGER_elmtrans(OP i, OP r);
INT m_INT_elmtrans(INT i, OP r);
INT m_bar_schubert(OP bar, OP res);
INT m_cosinus_reihe(OP a);
INT m_d_sc(OP dim, OP ergebnis);
INT m_eins_reihe(OP a);
INT m_ff_vector(OP a, OP b);
INT m_forall_monomials_in_a(OP a, OP b, OP c, OP f, INT (*partf)(OP,OP,OP,OP));
INT m_forall_monomials_in_ab(OP a, OP b, OP c, OP f, INT (*partf)(OP,OP,OP,OP));
INT m_forall_monomials_in_b(OP a, OP b, OP c, OP f, INT (*partf)(OP,OP,OP,OP));
INT m_function_reihe(INT (*f)(REIHE_zeiger,INT), OP a);
INT m_gk_spa(OP gross, OP klein, OP res);
INT m_gl_alt(OP a, OP b);
INT m_gl_chartafel(OP a, OP b);
INT m_gl_cl(OP a, OP b);
INT m_gl_co(OP a, OP b);
INT m_gl_cr(OP a, OP b);
INT m_gl_cyclic(OP a, OP b);
INT m_gl_first(OP a, OP b);
INT m_gl_ge_cl(OP a, OP b, OP c);
INT m_gl_glnq(OP n, OP q, OP c);
INT m_gl_go(OP a, OP b);
INT m_gl_hyp(OP a, OP b);
INT m_gl_il(OP a, OP b);
INT m_gl_nc(OP a, OP b, OP c);
INT m_gl_next(OP a, OP b, OP c);
INT m_gl_sym(OP a, OP b);
INT m_gl_symkranz(OP a, OP b, OP c);
INT m_i_elmsym(INT a, OP b);
INT m_i_i(INT a, OP b);
INT m_i_longint(INT a, OP b);
INT m_i_pa(OP i, OP result);
INT m_i_powsym(INT a, OP b);
INT m_i_schubert(INT a, OP b);
INT m_i_schur(INT a, OP b);
INT m_i_staircase(OP a, OP b);
INT m_iindex_iexponent_monom(INT i, INT ex, OP res);
INT m_iindex_monom(INT i, OP res);
INT m_iindex_monopoly(INT ii, OP mon);
INT m_il_bv(INT il, OP bitvec);
INT m_il_integervector(INT il, OP vec);
INT m_il_nbv(INT il, OP bitvec);
INT m_il_nv(INT il, OP vec);
INT m_il_p(INT l, OP p);
INT m_il_pa(INT i, OP p);
INT m_il_v(INT il, OP vec);
INT m_ilih_m(INT len, INT height, OP matrix);
INT m_ilih_nm(INT l, INT h, OP m);
INT m_index_monom(OP i, OP res);
INT m_int_pa(INT i, OP result);
INT m_ioiu_b(INT oben, INT unten, OP ergebnis);
INT m_kl_pa(OBJECTKIND a, OP b, OP c);
INT m_ks_p(OBJECTKIND kind, OP self, OP p);
INT m_ks_pa(OBJECTKIND kind, OP self, OP ergebnis);
INT m_ksd_n(OBJECTKIND kind, OP self, OP data, OP result);
INT m_l_nv(OP il, OP vec);
INT m_l_p(OP l, OP p);
INT m_l_v(OP length, OP a);
INT m_lehmer_schubert_monom_summe(OP a, OP b);
INT m_lehmer_schubert_qpolynom(OP a, OP b);
INT m_lh_m(OP len, OP height, OP matrix);
INT m_lh_nm(OP l, OP h, OP m);
INT m_matrix_tableaux(OP mat, OP tab);
INT m_matrix_umriss(OP mat, OP umr);
INT m_merge_partition_partition(OP a, OP b, OP c, OP f, INT (*lf)(OP,OP),INT (*hf)(OP,OP));
INT m_nc_kranz(OP l, OP i, OP b);
INT m_o_v(OP ob, OP vec);
INT m_ou_b(OP oben, OP unten, OP ergebnis);
INT m_pa_e(OP part, OP schur);
INT m_pa_h(OP part, OP schur);
INT m_pa_mon(OP part, OP schur);
INT m_pa_ps(OP part, OP schur);
INT m_pa_s(OP part, OP schur);
INT m_part_Qschur(OP a, OP b);
INT m_part_centralsc(OP part, OP c);
INT m_part_kostkaperm(OP a, OP b);
INT m_part_part_perm(OP a, OP b, OP c);
INT m_part_perm(OP a, OP b);
INT m_part_qelm(OP a, OP b);
INT m_part_sc(OP part, OP res);
INT m_part_sc_tafel(OP part, OP res, OP ct);
INT m_part_tableaux(OP part, OP alph, OP res);
INT m_part_youngsc(OP a, OP b);
INT m_perm_2schubert_monom_summe(OP perm, OP res);
INT m_perm_2schubert_operating_monom_summe(OP perm, OP perm2, OP res2);
INT m_perm_paareperm(OP a, OP b);
INT m_perm_reihe(OP a);
INT m_perm_rz_number(OP a, OP b);
INT m_perm_rz_set(OP a, OP b);
INT m_perm_sch(OP a, OP b);
INT m_perm_schubert_dimension(OP perm, OP res);
INT m_perm_schubert_monom_summe(OP perm, OP res);
INT m_perm_schubert_qpolynom(OP perm, OP res);
INT m_perm_schur(OP a, OP b);
INT m_s_po(OP self, OP poly);
INT m_scalar_bruch(OP a, OP b);
INT m_scalar_elmsym(OP a, OP b);
INT m_scalar_homsym(OP a, OP b);
INT m_scalar_monomial(OP a, OP b);
INT m_scalar_polynom(OP a, OP b);
INT m_scalar_powsym(OP a, OP b);
INT m_scalar_reihe(OP c, OP b);
INT m_scalar_schubert(OP a, OP b);
INT m_scalar_schur(OP a, OP b);
INT m_sinus_reihe(OP a);
INT m_sk_gr(OP self, OBJECTKIND kind, OP erg);
INT m_sk_mo(OP self, OP koeff, OP c);
INT m_skewpart_skewperm(OP a, OP b);
INT m_skn_mp(OP s, OP k, OP n, OP e);
INT m_skn_po(OP a, OP b, OP c, OP d);
INT m_skn_s(OP self, OP koeff, OP n, OP ergebnis);
INT m_skn_sch(OP self, OP koeff, OP n, OP ergebnis);
INT m_sn_l(OP self, OP nx, OP a);
INT m_tableaux_polynom(OP a, OP c);
INT m_tableaux_tableauxpair(OP tab, OP ergtab_eins, OP s);
INT m_u_t(OP umriss, OP res);
INT m_umriss_tableaux(OP umriss, OP alph, OP res);
INT m_us_t(OP umriss, OP self, OP res);
INT m_v_pa(OP vec, OP part);
INT m_v_po_mz(OP v, OP p, OP z);
INT m_v_s(OP vec, OP schur);
INT m_vcl_kranz(OP l, OP a);
INT m_vco_kranz(OP l, OP a);
INT m_vec_grad_nc_hyp(OP v, OP g, OP c);
INT m_vec_poly(OP a, OP c);
INT m_vec_vec_poly(OP a, OP b, OP c);
INT m_vector_diagonalmatrix(OP a, OP b);
INT m_vector_ff(OP a, OP b, OP c);
INT m_vector_graph(OP vector, INT (*kf)(OP,OP), OP erg);
INT m_wpd_sc(OP wert, OP parlist, OP dim, OP ergebnis);
INT mahh_hashtable_hashtable_(OP a, OP b, OP f);
INT mahh_integer_homsym_(OP a, OP b, OP f);
INT mahh_partition_hashtable_(OP a, OP b, OP f);
INT make_all_st_tabs(OP par, OP res);
INT make_alt_classes(OP n, OP res);
INT make_alt_partitions(OP n, OP res);
INT make_coprimes(OP number, OP result);
INT make_cyclotomic_monopoly(OP number, OP result);
INT make_ij_part(OP part, INT i, INT j, OP neupart);
INT make_index_coeff_power_cyclo(OP a, OP b, OP c, OP d);
INT make_index_power_cyclo(OP a, OP c, OP d);
INT make_monopoly_sqrad(OP a, OP b);
INT make_n_id(OP n, OP r);
INT make_n_kelmtrans(OP n, OP k, OP r);
INT make_n_transpositionmatrix(OP dim, OP mat);
INT make_neu_partij_schur(OP part, INT i, INT j,OP schur, OP sp);
INT make_nzykel(OP n, OP r);
INT make_partij_perm(OP part, INT i, INT j, OP perm);
INT make_partij_schur(OP part, INT i, INT j, OP schur);
INT make_real_cycletype(OP c, OP a);
INT make_scalar_cyclo(OP a, OP b);
INT make_scalar_sqrad(OP a, OP b);
INT make_tab_signs(OP par, OP res);
INT make_unitary0_monopoly(OP number, OP result);
INT make_unitary_eins_monopoly(OP number, OP result);
INT makealtclassreps(OP n, OP class, OP reps);
INT makevectorofSYT(OP shape, OP c);
INT makevectorof_class_bar(OP a, OP b);
INT makevectorof_class_rep_bar(OP a, OP b);
INT makevectorof_kranztypus(OP w, OP parts, OP c);
INT makevectorofpart(OP n, OP vec);
INT makevectorofpart_EXPONENT(OP n, OP vec);
INT makevectorofperm(OP a, OP b);
INT makevectorofrect_lehmercode(OP a, OP b);
INT makevectorofrect_permutation(OP a, OP b);
INT makevectorofshuffle(OP max, OP len, OP vec);
INT makevectorofspecht_poly(OP a, OP d);
INT makevectorofsubsets(OP a, OP b, OP c);
INT makevectorofsymspecht_poly(OP part, OP v);
INT makevectoroftableaux(OP shape, OP content, OP c);
INT makevectoroftranspositions(OP a, OP b);
INT maple_polynom(OP poly);
INT mapp_hashtable_hashtable_(OP a, OP b, OP f);
INT matrix_knuth(OP m, OP p_symbol, OP q_symbol);
INT matrix_monom_ypolynom(OP a, OP b, OP grad, OP partv, OP ct);
INT matrix_to_kranztypus(OP a, OP b);
INT matrix_twoword(OP matrix, OP column_index, OP row_index);
INT matrixp(OP a);
INT max(OP a, OP b);
INT max_bar(OP a, OP b);
INT max_degree_reihe(OP a, OP b);
INT max_divideddiff(OP n, OP poly, OP e);
INT max_integervector(OP vec, OP m);
INT max_matrix(OP a, OP b);
INT max_tableaux(OP a, OP b);
INT max_vector(OP vec, OP m);
INT maxdegree_schubert(OP a, OP b);
INT maxorder_young(OP a, OP b);
INT maxpart_comp_part(OP a, OP b);
INT maxrindexword(OP w, OP r, OP index, OP erg);
INT mee_elmsym__(OP a, OP b, OP c, OP f);
INT mee_hashtable__(OP a, OP b, OP c, OP f);
INT mee_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT mee_integer__(OP a, OP b, OP c, OP f);
INT mee_integer_hashtable_(OP a, OP b, OP c, OP f);
INT mee_integer_partition_(OP a, OP b, OP c, OP f);
INT mee_partition__(OP a, OP b, OP c, OP f);
INT mee_partition_partition_(OP a, OP b, OP c, OP f);
INT mem_elmsym__(OP a, OP b, OP c, OP f);
INT mem_ende(void);
INT mem_integer__(OP a, OP b, OP c, OP f);
INT mem_integer_hashtable_(OP a, OP b, OP c, OP f);
INT mem_integer_partition_(OP a, OP b, OP c, OP f);
INT mem_partition__(OP a, OP b, OP c, OP f);
INT mem_size(OP a);
INT mem_size_hashtable(OP a);
INT mem_size_longint(OP a);
INT mem_size_matrix(OP a);
INT mem_size_vector(OP a);
INT mem_small(void);
INT memcheck(char *stelle);
INT mes_elmsym__(OP a, OP b, OP c, OP f);
INT mes_ende(void);
INT mes_hashtable__(OP a, OP b, OP c, OP f);
INT mes_integer__(OP a, OP b, OP c, OP f);
INT mes_integer_hashtable_(OP a, OP b, OP c, OP f);
INT mes_integer_partition_(OP a, OP b, OP c, OP f);
INT mes_partition__(OP a, OP b, OP c, OP f);
INT mhh_hashtable__(OP a, OP b, OP c, OP f);
INT mhh_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT mhh_homsym__(OP a, OP b, OP c, OP f);
INT mhh_partition__(OP a, OP b, OP c, OP f);
INT mhh_partition_hashtable_(OP a, OP b, OP c, OP f);
INT mhh_partition_partition_(OP a, OP b, OP c, OP f);
INT mhm_hashtable__(OP a, OP b, OP c, OP f);
INT mhm_homsym__(OP a, OP b, OP c, OP f);
INT mhm_integer__(OP a, OP b, OP c, OP f);
INT mhm_integer_hashtable_hashtable(OP a, OP b, OP c, OP f);
INT mhm_integer_partition_hashtable(OP a, OP b, OP c, OP f);
INT mhm_null__(OP b, OP c, OP f);
INT mhm_partition__(OP a, OP b, OP c, OP f);
INT mhp_co(OP a, OP b, OP c, OP f);
INT mhp_hashtable__(OP a, OP b, OP c, OP f);
INT mhp_homsym__(OP a, OP b, OP c, OP f);
INT mhp_integer__(OP a, OP b, OP c, OP f);
INT mhp_integer_hashtable_(OP a, OP b, OP c, OP f);
INT mhp_integer_partition_(OP a, OP b, OP c, OP f);
INT mhp_partition__(OP a, OP b, OP c, OP f);
INT mhs_hashtable__(OP a, OP b, OP c, OP f);
INT mhs_homsym__(OP a, OP b, OP c, OP f);
INT mhs_integer__(OP a, OP b, OP c, OP f);
INT mhs_integer_partition_(OP a, OP b, OP c, OP f);
INT mhs_partition__(OP a, OP b, OP c, OP f);
INT min(OP a, OP b);
INT min_integervector(OP vec, OP m);
INT min_matrix(OP a, OP b);
INT min_tableaux(OP a, OP b);
INT min_vector(OP vec, OP m);
INT minimal_extension(OP ff);
INT mmm___(OP a, OP b, OP c, OP f);
INT mmm_ende(void);
INT mmm_hashtable__(OP a, OP b, OP c, OP f);
INT mmm_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT mmm_integer__(OP a, OP b, OP c, OP f);
INT mmm_integer_hashtable_(OP a, OP b, OP c, OP f);
INT mmm_integer_partition_(OP a, OP b, OP c, OP f);
INT mmm_monomial__(OP a, OP b, OP c, OP f);
INT mmm_null_partition_(OP b, OP c, OP f);
INT mmm_partition__(OP a, OP b, OP c, OP f);
INT mmm_partition_partition_(OP a, OP b, OP c, OP f);
INT mms___(OP a, OP b, OP c, OP f);
INT mms_hashtable__(OP a, OP b, OP c, OP f);
INT mms_hashtable_partition_(OP a, OP b, OP c, OP f);
INT mms_integer__(OP a, OP b, OP c, OP f);
INT mms_integer_partition_(OP a, OP b, OP c, OP f);
INT mms_monomial__(OP a, OP b, OP c, OP f);
INT mms_null__(OP b, OP c, OP f);
INT mms_partition__(OP a, OP b, OP c, OP f);
INT mms_partition_partition_(OP a, OP b, OP c, OP f);
INT mod(OP a, OP b, OP c);
INT mod_apply(OP a, OP b);
INT mod_apply_integer(OP a, OP b);
INT mod_apply_integer_longint(OP a, OP b);
INT mod_apply_longint(OP a, OP b);
INT mod_dg_sbd(OP prim, OP part, OP perm, OP mat);
INT mod_integer_integer(OP a, OP b, OP c);
INT mod_longint_integer(OP a, OP b, OP c);
INT mod_longint_integer_via_ganzsquores(OP a, OP b, OP c);
INT mod_matrix(OP a, OP b, OP c);
INT mod_monom(OP a, OP b, OP c);
INT mod_part(OP a, OP b, OP c);
INT mod_polynom(OP a, OP b, OP c);
INT mod_vector(OP vec, OP mo, OP res);
INT moddg(OP prime, OP llambda, OP pi, OP dmat);
INT moebius(OP n, OP my);
INT moebius_tafel(OP n, OP m);
INT monom_anfang(void);
INT monom_ende(void);
INT monom_release(void);
INT monomial_recursion(OP a, OP b, OP f, INT (*partf)(OP,OP,OP), INT (*monf)(OP,OP,OP), INT (*multf)(OP,OP,OP,OP));
INT monomial_recursion2(OP a, OP b, OP faktor, INT (*partf)(OP,OP,OP), INT (*integerf)(OP,OP,OP), INT (*elmsymf)(OP,OP,OP), INT (*multf)(OP,OP,OP));
INT move_1result_hashtable(OP a, OP c, OP h);
INT move_2result_hashtable(OP a, OP b, OP c, OP h);
INT mp_is_cst(OP mp);
INT mpp___(OP a, OP b, OP c, OP f);
INT mpp_ende(void);
INT mpp_hashtable__(OP a, OP b, OP c, OP f);
INT mpp_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT mpp_integer__(OP a, OP b, OP c, OP f);
INT mpp_integer_hashtable_(OP a, OP b, OP c, OP f);
INT mpp_integer_partition_(OP a, OP b, OP c, OP f);
INT mpp_partition__(OP a, OP b, OP c, OP f);
INT mpp_partition_partition_(OP a, OP b, OP c, OP f);
INT mpp_powsym__(OP a, OP b, OP c, OP f);
INT mps___(OP a, OP b, OP c, OP f);
INT mps_ende(void);
INT mps_hashtable__(OP a, OP b, OP c, OP f);
INT mps_integer__(OP a, OP b, OP c, OP f);
INT mps_integer_partition_(OP a, OP b, OP c, OP f);
INT mps_null__(OP b, OP c, OP f);
INT mps_partition__(OP a, OP b, OP c, OP f);
INT mps_powsym__(OP a, OP b, OP c, OP f);
INT mss___(OP a, OP b, OP c, OP f);
INT mss___maxpart_maxlength(OP a, OP b, OP c, OP f, INT m, INT l);
INT mss_ende(void);
INT mss_hashtable__(OP a, OP b, OP c, OP f);
INT mss_hashtable__maxpart_maxlength(OP a, OP b, OP c, OP f, INT m, INT l);
INT mss_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT mss_hashtable_hashtable_maxpart_maxlength(OP a, OP b, OP c, OP f, INT m, INT l);
INT mss_partition__(OP a, OP b, OP c, OP f);
INT mss_partition__maxpart_maxlength(OP a, OP b, OP c, OP f, INT m, INT l);
INT mss_partition_partition_(OP a, OP b, OP c, OP f);
INT mss_partition_partition_maxpart_maxlength(OP a, OP b, OP c, OP f, INT m, INT l);
INT mss_schur__(OP a, OP b, OP c, OP f);
INT mss_schur__maxpart_maxlength(OP a, OP b, OP c, OP f, INT m, INT l);
INT mult(OP a, OP b, OP d);
INT mult_apply(OP a, OP b);
INT mult_apply_bruch(OP a, OP b);
INT mult_apply_bruch_bruch(OP a, OP b);
INT mult_apply_bruch_hashtable(OP a, OP b);
INT mult_apply_bruch_integer(OP a, OP b);
INT mult_apply_bruch_longint(OP a, OP b);
INT mult_apply_bruch_monom(OP a, OP b);
INT mult_apply_bruch_polynom(OP a, OP b);
INT mult_apply_bruch_scalar(OP a, OP b);
INT mult_apply_cyclo(OP a, OP b);
INT mult_apply_default(OP a, OP b);
INT mult_apply_elmsym(OP a, OP b);
INT mult_apply_elmsym_elmsym(OP a, OP b);
INT mult_apply_ff(OP a, OP b);
INT mult_apply_gral(OP a, OP b);
INT mult_apply_homsym(OP a, OP b);
INT mult_apply_homsym_homsym(OP a, OP b);
INT mult_apply_homsym_schur(OP a, OP b);
INT mult_apply_integer(OP a, OP b);
INT mult_apply_integer_bruch(OP a, OP b);
INT mult_apply_integer_hashtable(OP a, OP b);
INT mult_apply_integer_integer(OP a, OP b);
INT mult_apply_integer_integervector(OP a, OP b);
INT mult_apply_integer_longint(OP a, OP b);
INT mult_apply_integer_matrix(OP a, OP b);
INT mult_apply_integer_monom(OP a, OP b);
INT mult_apply_integer_polynom(OP a, OP b);
INT mult_apply_longint(OP a, OP b);
INT mult_apply_longint_bruch(OP a, OP b);
INT mult_apply_longint_integer(OP a, OP b);
INT mult_apply_longint_longint(OP a, OP b);
INT mult_apply_longint_matrix(OP a, OP b);
INT mult_apply_longint_polynom(OP a, OP b);
INT mult_apply_matrix(OP a, OP b);
INT mult_apply_matrix_matrix(OP a, OP b);
INT mult_apply_monom(OP a, OP b);
INT mult_apply_monomial(OP a, OP b);
INT mult_apply_monomial_monomial(OP a, OP b);
INT mult_apply_monopoly(OP a, OP b);
INT mult_apply_permutation(OP a, OP b);
INT mult_apply_polynom(OP a, OP b);
INT mult_apply_polynom_polynom(OP a, OP b);
INT mult_apply_polynom_scalar(OP a, OP b);
INT mult_apply_powsym(OP a, OP b);
INT mult_apply_powsym_powsym(OP a, OP b);
INT mult_apply_reihe(OP a, OP b);
INT mult_apply_scalar_bruch(OP a, OP b);
INT mult_apply_scalar_cyclo(OP a, OP b);
INT mult_apply_scalar_hashtable(OP a, OP b);
INT mult_apply_scalar_matrix(OP a, OP b);
INT mult_apply_scalar_monom(OP a, OP b);
INT mult_apply_scalar_monopoly(OP a, OP b);
INT mult_apply_scalar_polynom(OP a, OP b);
INT mult_apply_scalar_sqrad(OP a, OP b);
INT mult_apply_scalar_symchar(OP a, OP b);
INT mult_apply_scalar_vector(OP a, OP b);
INT mult_apply_schur(OP a, OP b);
INT mult_apply_schur_schur(OP a, OP b);
INT mult_apply_sqrad(OP a, OP b);
INT mult_apply_symchar(OP a, OP b);
INT mult_apply_vector(OP a, OP b);
INT mult_apply_vector_vector(OP a, OP b);
INT mult_bar_bar(OP a, OP b, OP c);
INT mult_bruch(OP a, OP b, OP c);
INT mult_bruch_bruch(OP a, OP b, OP c);
INT mult_bruch_hashtable(OP a, OP b, OP c);
INT mult_bruch_integer(OP a, OP b, OP c);
INT mult_bruch_longint(OP a, OP b, OP c);
INT mult_cyclo(OP a, OP b, OP c);
INT mult_cyclo_cyclo(OP a, OP b, OP c);
INT mult_disjunkt_polynom_polynom(OP a, OP b, OP c);
INT mult_elmsym(OP a, OP b, OP c);
INT mult_elmsym_elmsym(OP a, OP b, OP c);
INT mult_elmsym_homsym(OP a, OP b, OP c);
INT mult_elmsym_monomial(OP a, OP b, OP c);
INT mult_elmsym_powsym(OP a, OP b, OP c);
INT mult_elmsym_scalar(OP a, OP b, OP c);
INT mult_elmsym_schur(OP a, OP b, OP c);
INT mult_ff(OP a, OP b, OP c);
INT mult_ff_ff(OP a, OP b, OP c);
INT mult_ff_integer(OP a, OP b, OP c);
INT mult_galois(OP a, OP b, OP c);
INT mult_galois_galois(OP p1, OP p2, OP p3);
INT mult_gral(OP a, OP b, OP d);
INT mult_gral_gral(OP eins, OP zwei, OP res);
INT mult_hashtable_hashtable(OP a, OP b, OP d);
INT mult_hashtable_hashtable_faktor(OP a, OP b, OP d, OP faktor);
INT mult_homsym(OP a, OP b, OP c);
INT mult_homsym_elmsym(OP a, OP b, OP c);
INT mult_homsym_homsym(OP a, OP b, OP c);
INT mult_homsym_monomial(OP a, OP b, OP c);
INT mult_homsym_powsym(OP a, OP b, OP c);
INT mult_homsym_scalar(OP a, OP b, OP c);
INT mult_homsym_schur(OP a, OP b, OP c);
INT mult_imatrix_imatrix(OP a, OP b, OP c);
INT mult_integer(OP a, OP b, OP d);
INT mult_integer_bruch(OP a, OP b, OP c);
INT mult_integer_hashtable(OP a, OP b, OP c);
INT mult_integer_integer(OP a, OP b, OP d);
INT mult_integer_longint(OP a, OP b, OP c);
INT mult_integer_monom(OP a, OP b, OP c);
INT mult_kranz_kranz(OP a, OP b, OP c);
INT mult_laurent(OP vc1, OP vc2, OP res);
INT mult_longint(OP a, OP c, OP l);
INT mult_longint_integer(OP a, OP b, OP c);
INT mult_longint_integer_via_ganzsmul(OP a, OP c, OP l);
INT mult_longint_longint(OP a, OP c, OP l);
INT mult_matrix(OP a, OP b, OP d);
INT mult_matrix_matrix(OP a, OP b, OP c);
INT mult_matrix_vector(OP b, OP a, OP c);
INT mult_monom(OP a, OP b, OP c);
INT mult_monomial(OP a, OP b, OP c);
INT mult_monomial_elmsym(OP a, OP b, OP c);
INT mult_monomial_homsym(OP a, OP b, OP c);
INT mult_monomial_monomial(OP a, OP b, OP c);
INT mult_monomial_powsym(OP a, OP b, OP c);
INT mult_monomial_scalar(OP a, OP b, OP c);
INT mult_monomial_schur(OP a, OP b, OP c);
INT mult_monopoly(OP a, OP b, OP c);
INT mult_monopoly_monopoly(OP a, OP b, OP c);
INT mult_monopoly_polynom(OP a, OP b, OP c);
INT mult_nc_kranz(OP a, OP b, OP c);
INT mult_perm_fix(OP perm, OP fix, OP hfix);
INT mult_permutation(OP a, OP b, OP c);
INT mult_polynom(OP a, OP b, OP d);
INT mult_polynom_polynom(OP eins, OP zwei, OP c);
INT mult_power_schur(OP a, OP b, OP c);
INT mult_powsym(OP a, OP b, OP c);
INT mult_powsym_elmsym(OP a, OP b, OP c);
INT mult_powsym_homsym(OP a, OP b, OP c);
INT mult_powsym_monomial(OP a, OP b, OP c);
INT mult_powsym_powsym(OP a, OP b, OP c);
INT mult_powsym_scalar(OP a, OP b, OP c);
INT mult_powsym_schur(OP a, OP b, OP c);
INT mult_reihe(OP a, OP b, OP c);
INT mult_scalar_cyclo(OP a, OP b, OP c);
INT mult_scalar_gral(OP von, OP nach, OP ergebnis);
INT mult_scalar_matrix(OP scalar, OP mat, OP res);
INT mult_scalar_monom(OP a, OP b, OP c);
INT mult_scalar_monopoly(OP a, OP b, OP c);
INT mult_scalar_polynom(OP a, OP poly, OP res);
INT mult_scalar_schubert(OP von, OP nach, OP ergebnis);
INT mult_scalar_sqrad(OP a, OP b, OP c);
INT mult_scalar_symchar(OP a, OP b, OP c);
INT mult_scalar_vector(OP a, OP b, OP c);
INT mult_schubert_monom(OP a, OP b, OP c);
INT mult_schubert_polynom(OP a, OP b, OP c);
INT mult_schubert_schubert(OP a, OP b, OP c);
INT mult_schubert_variable(OP a, OP i, OP r);
INT mult_schur(OP a, OP b, OP c);
INT mult_schur_elmsym(OP a, OP b, OP c);
INT mult_schur_homsym(OP a, OP b, OP c);
INT mult_schur_monomial(OP a, OP b, OP c);
INT mult_schur_powsym(OP a, OP b, OP c);
INT mult_schur_scalar(OP a, OP b, OP c);
INT mult_schur_schur(OP a, OP b, OP c);
INT mult_schur_schur_maxlength(OP a, OP b, OP c, OP l);
INT mult_schur_schur_maxpart_maxlength(OP a, OP b, OP c, OP m, OP l);
INT mult_sqrad(OP a, OP b, OP c);
INT mult_sqrad_sqrad(OP a, OP b, OP c);
INT mult_symchar_symchar(OP a, OP b, OP c);
INT mult_vector_matrix(OP a, OP b, OP c);
INT mult_vector_vector(OP a, OP b, OP c);
INT multadd_apply(OP a, OP b, OP c);
INT multadd_apply_default(OP a, OP b, OP c);
INT multadd_apply_ff(OP a, OP b, OP c);
INT multinom(OP a, OP b, OP c);
INT multinom_small(OP a, OP b, OP c);
INT multiplicity_part(OP part, INT i);
INT mx_outerproduct_schur_lrs(OP mx, OP pa, OP pb, OP c);
INT mx_power_schur_plet(OP mx, OP a, OP b, OP c);
INT mx_powerproduct_schur_plet(OP mx, OP a, OP b, OP c);
INT mx_schur_power_schur_plet_mult(OP ol, OP a, OP b, OP c, OP d);
INT mx_schur_powerproduct_schur_plet_mult(OP ol, OP a, OP b, OP c, OP d);
INT mx_schur_schur_plet(OP a, OP b, OP c, OP res);
INT mx_schur_schur_pletbis(OP mx, OP a, OP b, OP c);
INT mxx_null__(OP b, OP c, OP f);
INT mz_extrahieren(OP aa, OP c, OP dd);
INT mz_vereinfachen(OP aa, OP c);
INT n_fold_kronecker_product(OP n, OP a, OP b);
INT nachfolger_young(OP a, OP b);
INT nb_ende(void);
INT ndg(OP part, OP perm, OP dg_mat);
INT neg_sum(OP a, OP b);
INT negeinsp(OP a);
INT negeinsp_bruch(OP a);
INT negeinsp_integer(OP a);
INT negeinsp_longint(OP a);
INT negeinsp_polynom(OP a);
INT negp(OP a);
INT negp_bruch(OP a);
INT negp_integer(OP a);
INT negp_longint(OP a);
INT negp_polynom(OP a);
INT neq(OP a, OP b);
INT neqparts_partition(OP a);
INT new_divdiff_bar(OP a, OP b, OP c);
INT new_divideddiff_rz_bar(OP rzt, OP poly, OP c);
INT new_divideddifference_bar(OP i, OP poly, OP c);
INT new_orbit(OP G, OP fix, OP FP);
INT newtrans(OP perm, OP c);
INT newtrans_eins(OP c);
INT newtrans_lehmer(OP perm, OP c);
INT newtrans_limit_limitfunction(OP perm, OP c, OP d, INT (*f)(OP,OP), OP limit);
INT newtrans_limitfunction(OP perm, OP c, INT (*f)(OP,OP), OP limit);
INT newtrans_maxpart(OP perm, OP e, INT maxpart);
INT newtrans_maxpart_maxlength(OP perm, OP e, INT maxpart, INT maxlength);
INT next(OP von, OP nach);
INT next_apply(OP obj);
INT next_apply_bar(OP a);
INT next_apply_composition(OP newcomp);
INT next_apply_ff(OP a);
INT next_apply_gr(OP gr1);
INT next_apply_partition(OP part);
INT next_apply_permutation(OP a);
INT next_apply_subset(OP c);
INT next_bar(OP a, OP b);
INT next_composition(OP c, OP newcomp);
INT next_ff(OP a, OP b);
INT next_gr(OP gr1, OP gr2);
INT next_kranztypus(OP alt, OP c);
INT next_lehmercode(OP start, OP n);
INT next_lex_tableaux(OP a, OP b);
INT next_lex_vector(OP a, OP b);
INT next_part_EXPONENT(OP part, OP next);
INT next_part_EXPONENT_apply(OP part);
INT next_part_VECTOR(OP part, OP next);
INT next_part_VECTOR_apply(OP part);
INT next_partition(OP part, OP next);
INT next_partition_apply(OP part);
INT next_perm_invers(OP a, OP b);
INT next_permutation(OP a, OP b);
INT next_permutation_lex(OP start, OP next);
INT next_shuffle_part(OP part, OP a, OP b);
INT next_shufflepermutation(OP mx, OP perm, OP erg);
INT next_shufflevector(OP mx, OP a, OP b);
INT next_subset(OP c, OP d);
INT no_memory(void);
INT no_orbits_arb(OP a, OP b, OP c);
INT normal_laurent(OP vc);
INT not_yet_implemented(char *t);
INT ntopaar_symchar(OP a, OP b);
INT null(OP a, OP b);
INT null_default(OP a, OP b);
INT null_ff(OP a, OP b);
INT null_ff_given_q(OP q, OP b);
INT null_galois(OP a,OP b);
INT null_gr_given_c_d(OP c, OP d, OP gr);
INT null_object(char *t);
INT nullp(OP a);
INT nullp_bitvector(OP bit);
INT nullp_bruch(OP a);
INT nullp_cyclo(OP a);
INT nullp_elmsym(OP a);
INT nullp_ff(OP a);
INT nullp_galois(OP g);
INT nullp_homsym(OP a);
INT nullp_integer(OP a);
INT nullp_integermatrix(OP a);
INT nullp_integervector(OP a);
INT nullp_longint(OP a);
INT nullp_matrix(OP a);
INT nullp_monomial(OP a);
INT nullp_monopoly(OP a);
INT nullp_polynom(OP a);
INT nullp_powsym(OP a);
INT nullp_reihe(OP a);
INT nullp_schubert(OP a);
INT nullp_schur(OP a);
INT nullp_sqrad(OP a);
INT nullp_symchar(OP a);
INT nullp_vector(OP a);
INT number_01_matrices(OP a, OP b, OP c);
INT number_nat_matrices(OP a, OP b, OP c);
INT number_of_bits(OP a);
INT number_of_digits(OP a);
INT number_of_irred_poly_of_degree(OP d, OP q, OP ergeb);
INT numberof_class_kranz(OP l, OP a);
INT numberof_inversionen(OP a, OP b);
INT numberof_shufflepermutation(OP mx, OP n);
INT numberofmonomials(OP a, OP n);
INT numberofpart(OP n, OP res);
INT numberofpart_i(OP n);
INT numberofparts_exact_parts(OP a, OP b, OP c);
INT numberofparts_ge(OP a, OP b, OP c);
INT numberofparts_le_parts(OP a, OP b, OP c);
INT numberofselfconjugatepart(OP a, OP c);
INT numberofvariables(OP a, OP n);
INT nxt_ym(OP ym1, OP ym2);
INT objectread(FILE *f, OP obj);
INT objectread_bruch(FILE *f, OP a);
INT objectread_bv(FILE *filename, OP vec);
INT objectread_ff(FILE *f, OP a);
INT objectread_gral(FILE *filename, OP gral);
INT objectread_hashtable(FILE *fp, OP h);
INT objectread_integer(FILE *filename, OP obj);
INT objectread_list(FILE *f, OP a);
INT objectread_longint(FILE *f, OP l);
INT objectread_matrix(FILE *fp, OP matrix);
INT objectread_monom(FILE *f, OP a);
INT objectread_monopoly(FILE *f, OP a);
INT objectread_number(FILE *f, OP number, OBJECTKIND type);
INT objectread_partition(FILE *filename, OP part);
INT objectread_permutation(FILE *filename, OP perm);
INT objectread_schur(FILE *filename, OP poly);
INT objectread_skewpartition(FILE *f, OP a);
INT objectread_symchar(FILE *fp, OP a);
INT objectread_tableaux(FILE *f, OP a);
INT objectread_vector(FILE *filename, OP vec);
INT objectwrite(FILE *f, OP obj);
INT objectwrite_bruch(FILE *f, OP a);
INT objectwrite_bv(FILE *filename, OP vec);
INT objectwrite_ff(FILE *f, OP a);
INT objectwrite_gral(FILE *filename, OP gral);
INT objectwrite_hashtable(FILE *fp, OP h);
INT objectwrite_integer(FILE *filename, OP obj);
INT objectwrite_list(FILE *f, OP a);
INT objectwrite_longint(FILE *f, OP l);
INT objectwrite_matrix(FILE *fp, OP matrix);
INT objectwrite_monom(FILE *f, OP a);
INT objectwrite_number(FILE *f, OP number);
INT objectwrite_partition(FILE *filename, OP part);
INT objectwrite_permutation(FILE *filename, OP perm);
INT objectwrite_schur(FILE *filename, OP poly);
INT objectwrite_skewpartition(FILE *f, OP a);
INT objectwrite_symchar(FILE *fp, OP a);
INT objectwrite_tableaux(FILE *f, OP a);
INT objectwrite_vector(FILE *filename, OP vec);
INT odd(OP a);
INT odd_longint(OP a);
INT odd_to_strict_part(OP a, OP b);
INT oddify_longint(OP a);
INT oddpartsp(OP a);
INT odg(OP part, OP perm, OP D);
INT operate_gral_polynom(OP a, OP b, OP c);
INT operate_perm_bideterminant(OP a, OP b, OP c);
INT operate_perm_polynom(OP a, OP b, OP c);
INT operate_perm_spaltenmatrix(OP a, OP b, OP c);
INT operate_perm_tableaux(OP b, OP a, OP c);
INT operate_perm_vector(OP perm, OP b, OP c);
INT operate_perm_zeilenmatrix(OP perm, OP b, OP c);
INT or_character(OP n, OP partition, OP character);
INT or_dimension(OP n, OP partition, OP dim);
INT or_tableaux(OP n, OP partition, OP list);
INT orbit(OP erz, OP root, OP res, INT (*f)(OP,OP,OP), OP sv);
INT orbit_set_max_size(INT s);
INT orbit_words(OP erz, OP root, OP res, INT (*f)(OP,OP,OP), OP sv);
INT orblen(OP G, OP fix);
INT ordcen(OP part, OP res);
INT ordcen_bar(OP a, OP b);
INT ordcon(OP part, OP res);
INT ordcon_bar(OP a, OP b);
INT order_class_kranz(OP l, OP i, OP a);
INT order_ff(OP a, OP b);
INT order_permutation(OP a, OP b);
INT ordnung_affkq(OP k, OP q, OP ord);
INT ordnung_glkq(OP k, OP q, OP ord);
INT outerproduct_schubert(OP a, OP b, OP c);
INT outerproduct_schur(OP a, OP b, OP c);
INT outerproduct_schur_limit(OP a, OP b, OP c, OP l);
INT outerproduct_schur_limit_limitfunction(OP a, OP b, OP c, OP k, INT (*f)(OP,OP), OP l);
INT outerproduct_schur_limitfunction(OP a, OP b, OP c, INT (*f)(OP,OP), OP l);
INT outerproduct_schur_lrs(OP pa, OP pb, OP c);
INT p_hook_diagramm(OP a, OP b, OP c);
INT p_root_part(OP a, OP n, OP p, OP b);
INT p_root_schur(OP a, OP n, OP p, OP b);
INT p_schursum(OP a, OP b, OP c, OP f, INT (*schurf)(OP,OP,OP,OP), INT (*partf)(OP,OP,OP,OP), INT (*multf)(OP,OP,OP,OP));
INT p_splitpart(OP a, OP b, OP c, OP f, INT (*tf)(OP,OP,OP,OP), INT (*mf)(OP,OP,OP,OP));
INT p_splitpart2(OP a, OP b, OP c, OP f, INT (*tf)(OP,OP,OP,OP), INT (*mf)(OP,OP,OP,OP));
INT part_anfang(void);
INT part_comp(OP a, OP b);
INT part_ende(void);
INT part_part_skewschur(OP a, OP b, OP c);
INT partitionp(OP a);
INT perm_anfang(void);
INT perm_ende(void);
INT perm_matrix(OP a, OP b);
INT perm_matrix_p(OP a);
INT perm_tableaux(OP a, OP b);
INT permutation_matrix(OP a, OP b);
INT permutationp(OP a);
INT pes___(OP a, OP b, OP c, OP f);
INT pes_elmsym__(OP a, OP b, OP c, OP f);
INT pes_ende(void);
INT pes_hashtable__(OP a, OP b, OP c, OP f);
INT pes_integer__(OP a, OP b, OP c, OP f);
INT pes_integer_hashtable_(OP a, OP b, OP c, OP f);
INT pes_integer_partition_(OP a, OP b, OP c, OP f);
INT pes_null__(OP b, OP c, OP f);
INT pes_null_partition_(OP b, OP c, OP f);
INT pes_partition__(OP a, OP b, OP c, OP f);
INT pfact(OP a);
INT pfaffian_matrix(OP mat, OP res);
INT pgcd(OP a, OP b, OP c);
INT phm___(OP a, OP b, OP c, OP f);
INT phm_ende(void);
INT phm_hashtable__(OP a, OP b, OP c, OP f);
INT phm_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT phm_homsym__(OP a, OP b, OP c, OP f);
INT phm_integer__(OP a, OP b, OP c, OP f);
INT phm_integer_hashtable_(OP a, OP b, OP c, OP f);
INT phm_integer_integer_(OP a, OP b, OP c, OP f);
INT phm_integer_partition_(OP a, OP b, OP c, OP f);
INT phm_null__(OP b, OP c, OP f);
INT phm_null_partition_(OP b, OP c, OP f);
INT phm_partition__(OP a, OP b, OP c, OP f);
INT phs___(OP a, OP b, OP c, OP f);
INT phs_ende(void);
INT phs_hashtable__(OP a, OP b, OP c, OP f);
INT phs_homsym__(OP a, OP b, OP c, OP f);
INT phs_integer__(OP a, OP b, OP c, OP f);
INT phs_integer_hashtable_(OP a, OP b, OP c, OP f);
INT phs_integer_partition_(OP a, OP b, OP c, OP f);
INT phs_null__(OP b, OP c, OP f);
INT phs_null_partition_(OP b, OP c, OP f);
INT phs_partition__(OP a, OP b, OP c, OP f);
INT plane_tableau(OP a, OP b);
INT planep(OP a);
INT plaziere_verband(OP a, INT (*lf)(OP,OP));
INT plet_elmsym_elmsym(OP a, OP b, OP c);
INT plet_elmsym_homsym(OP a, OP b, OP c);
INT plet_elmsym_monomial(OP a, OP b, OP c);
INT plet_elmsym_powsym(OP a, OP b, OP c);
INT plet_elmsym_schur(OP a, OP b, OP c);
INT plet_homsym_elmsym(OP a, OP b, OP c);
INT plet_homsym_homsym(OP a, OP b, OP c);
INT plet_homsym_monomial(OP a, OP b, OP c);
INT plet_homsym_monomial_via_ppm(OP a, OP b, OP c);
INT plet_homsym_powsym(OP a, OP b, OP c);
INT plet_homsym_schur(OP a, OP b, OP c);
INT plet_monomial_elmsym(OP a, OP b, OP c);
INT plet_monomial_homsym(OP a, OP b, OP c);
INT plet_monomial_monomial(OP a, OP b, OP c);
INT plet_monomial_powsym(OP a, OP b, OP c);
INT plet_monomial_schur(OP a, OP b, OP c);
INT plet_powsym_elmsym(OP a, OP b, OP c);
INT plet_powsym_homsym(OP a, OP b, OP c);
INT plet_powsym_monomial(OP a, OP b, OP c);
INT plet_powsym_powsym(OP a, OP b, OP c);
INT plet_powsym_schur(OP a, OP b, OP c);
INT plet_powsym_schur_via_ppm(OP a, OP b, OP c);
INT plet_schur_elmsym(OP a, OP b, OP c);
INT plet_schur_homsym(OP a, OP b, OP c);
INT plet_schur_monomial(OP a, OP b, OP c);
INT plet_schur_monomial_new(OP a, OP b, OP c);
INT plet_schur_powsym(OP a, OP b, OP c);
INT plet_schur_schur(OP a, OP b, OP c);
INT plet_schur_schur_pol(OP parta, OP partb, OP len, OP res);
INT plet_schur_schur_via_phs(OP a, OP b, OP c);
INT plethysm(OP a, OP b, OP c);
INT plethysm_schur_monomial(OP a, OP b, OP c);
INT plethysm_schur_schur(OP a, OP b, OP c);
INT pn_character(OP n, OP partition, OP character);
INT pn_dimension(OP n, OP partition, OP dim);
INT pn_tableaux(OP n, OP partition, OP list);
INT point(OP a, OP b, OP c);
INT polya1_sub(OP a, OP c, OP b);
INT polya2_sub(OP a, OP c, OP b);
INT polya3_sub(OP a, OP c, OP dd, OP b);
INT polya_const_sub(OP a, OP b, OP c);
INT polya_multi_const_sub(OP aa, OP d, OP b);
INT polya_multi_sub(OP aa, OP b);
INT polya_n_sub(OP p, OP n, OP e);
INT polya_sub(OP a, OP c, OP b);
OP pop(OP q);
INT pos_sum(OP a, OP b);
INT posp(OP a);
INT posp_bruch(OP a);
INT posp_integer(OP a);
INT posp_longint(OP a);
INT posp_polynom(OP a);
INT posp_vector(OP a);
INT power_schur_plet(OP a, OP b, OP c);
INT power_schur_plet_old(OP jvalu, OP part, OP res);
INT powerproduct_schur_plet(OP a, OP b, OP c);
INT ppe___(OP a, OP b, OP c, OP f);
INT ppe_ende(void);
INT ppe_hashtable__(OP a, OP b, OP c, OP f);
INT ppe_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT ppe_integer__(OP a, OP b, OP c, OP f);
INT ppe_integer_hashtable_(OP a, OP b, OP c, OP f);
INT ppe_integer_integer_(OP a, OP b, OP c, OP f);
INT ppe_integer_partition_(OP a, OP b, OP c, OP f);
INT ppe_null__(OP b, OP c, OP f);
INT ppe_null_partition_(OP b, OP c, OP f);
INT ppe_partition__(OP a, OP b, OP c, OP f);
INT ppe_powsym__(OP a, OP b, OP c, OP f);
INT pph___(OP a, OP b, OP c, OP f);
INT pph_ende(void);
INT pph_hashtable__(OP a, OP b, OP c, OP f);
INT pph_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT pph_integer__(OP a, OP b, OP c, OP f);
INT pph_integer_hashtable_(OP a, OP b, OP c, OP f);
INT pph_integer_integer_(OP a, OP b, OP c, OP f);
INT pph_integer_partition_(OP a, OP b, OP c, OP f);
INT pph_null__(OP b, OP c, OP f);
INT pph_null_partition_(OP b, OP c, OP f);
INT pph_partition__(OP a, OP b, OP c, OP f);
INT pph_powsym__(OP a, OP b, OP c, OP f);
INT ppm___(OP a, OP b, OP c, OP f);
INT ppm_ende(void);
INT ppm_hashtable__(OP a, OP b, OP c, OP f);
INT ppm_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT ppm_integer__(OP a, OP b, OP c, OP f);
INT ppm_integer_hashtable_(OP a, OP b, OP c, OP f);
INT ppm_integer_integer_(OP a, OP b, OP c, OP f);
INT ppm_integer_partition_(OP a, OP b, OP c, OP f);
INT ppm_null__(OP b, OP c, OP f);
INT ppm_null_partition_(OP b, OP c, OP f);
INT ppm_partition__(OP a, OP b, OP c, OP f);
INT ppm_powsym__(OP a, OP b, OP c, OP f);
INT ppp___(OP a, OP b, OP c, OP f);
INT ppp_ende(void);
INT ppp_hashtable__(OP a, OP b, OP c, OP f);
INT ppp_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT ppp_integer__(OP a, OP b, OP c, OP f);
INT ppp_integer_hashtable_(OP a, OP b, OP c, OP f);
INT ppp_integer_partition_(OP a, OP b, OP c, OP f);
INT ppp_null__(OP b, OP c, OP f);
INT ppp_null_partition_(OP b, OP c, OP f);
INT ppp_partition__(OP a, OP b, OP c, OP f);
INT ppp_powsym__(OP a, OP b, OP c, OP f);
INT pps___(OP a, OP b, OP c, OP f);
INT pps_ende(void);
INT pps_hashtable__(OP a, OP b, OP c, OP f);
INT pps_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT pps_integer__(OP a, OP b, OP c, OP f);
INT pps_null__(OP b, OP c, OP f);
INT pps_null_partition_(OP b, OP c, OP f);
INT pps_partition__(OP a, OP b, OP c, OP f);
INT pps_powsym__(OP a, OP b, OP c, OP f);
INT prepartdom(OP part, INT *i, INT *j, OP prepart);
INT prime_power_p(OP a);
INT primep(OP a);
INT primep_ff(OP a);
INT primitive_element_ff(OP p, OP k, OP c);
INT primitive_element_ff_given_q(OP q, OP b);
INT print(OP obj);
INT print_cyclo_data(CYCLO_DATA* ptr);
INT print_cyclo_list(void);
INT print_cyclo_table(void);
INT print_schubert_difference(OP b, OP c);
INT print_stat_hashtable(OP a);
INT print_time(void);
INT print_type(OBJECTKIND a);
INT printeingabe(char *text);
INT println(OP obj);
INT println_schub_lehmer(OP a);
INT printobjectkind(OP a);
INT prsym(OP lambda, OP T_v);
INT psl_apply_i_integer(OP a, INT i);
INT psl_apply_i_longint(OP a, INT i);
INT psl_apply_longint(OP a);
INT psm___(OP a, OP b, OP c, OP f);
INT psm_ende(void);
INT psr_apply_i_integer(OP a, INT i);
INT psr_apply_i_longint(OP a, INT i);
INT pss___(OP a, OP b, OP c, OP f);
INT pss_ende(void);
INT pss_hashtable__(OP a, OP b, OP c, OP f);
INT pss_hashtable_hashtable_(OP a, OP b, OP c, OP f);
INT pss_integer__(OP a, OP b, OP c, OP f);
INT pss_integer_hashtable_(OP a, OP b, OP c, OP f);
INT pss_integer_integer_(OP a, OP b, OP c, OP f);
INT pss_integer_partition_(OP a, OP b, OP c, OP f);
INT pss_integer_schur_(OP a, OP b, OP c, OP f);
INT pss_null__(OP b, OP c, OP f);
INT pss_null_partition_(OP b, OP c, OP f);
INT pss_partition__(OP a, OP b, OP c, OP f);
INT pss_partition_hashtable_(OP a, OP b, OP c, OP f);
INT pss_partition_partition_(OP a, OP b, OP c, OP f);
INT pss_partition_schur_(OP a, OP b, OP c, OP f);
INT pss_schur__(OP a, OP b, OP c, OP f);
INT push(OP a, OP q);
INT put_exactlength_limit_schur(INT i, OP a);
INT put_length_limit_schur(INT i, OP a);
INT q_core(OP a, OP b, OP d);
INT q_core_sign(OP a, OP b, OP d, OP si);
INT qdimension(OP n, OP d);
INT qdimension_schubert(OP sb,OP res);
INT qsort_vector(OP vec);
INT quadraticp(OP mat);
INT quores(OP a, OP b, OP c, OP d);
INT quores_integer(OP a, OP b, OP c, OP d);
INT quores_longint(OP a, OP e, OP c, OP d);
INT quores_monopoly(OP a, OP b, OP c, OP d);
INT raise_power_monopoly(OP a, OP b);
INT random_adjacency_matrix(OP n, OP a);
INT random_bar(OP n, OP b);
INT random_bruch(OP a);
INT random_bv(OP a, OP b);
INT random_char_ff(OP a, OP b);
INT random_ff(OP b);
INT random_ff_given_q(OP q, OP b);
INT random_gr_given_c_d(OP c, OP d, OP b);
INT random_gral(OP a, OP b);
INT random_integer(OP res, OP para_eins, OP para_zwei);
INT random_integervector(OP a, OP b);
INT random_kranz(OP gn, OP vn, OP a);
INT random_longint(OP res, OP ober);
INT random_monom(OP a);
INT random_part_EXPONENT(OP n, OP b);
INT random_partition(OP n, OP p);
INT random_partition_exponent(OP n, OP b);
INT random_permutation(OP ln, OP b);
INT random_polynom(OP a);
INT random_reihe(OP a);
INT random_subgroup_glk_grcd(OP k, OP c, OP d, OP a);
INT random_subgroup_glk_grcd_2gen(OP k, OP c, OP d, OP a);
INT random_subgroup_glk_grcd_cyclic(OP k, OP c, OP d, OP a);
INT random_subgroup_glk_grcd_diagonal(OP k, OP c, OP d, OP a);
INT random_subgroup_glk_grcd_smaller_k(OP k, OP c, OP d, OP a);
INT random_subgroup_glk_grcd_stabilizer(OP k, OP phgc, OP phgd, OP a);
INT random_word(OP a, OP b);
INT rank(OP a, OP b);
INT rank_ff(OP a, OP b);
INT rank_k_subset(OP set, OP n, OP number);
INT rank_permutation(OP a, OP b);
INT red_dia_perm(OP p, OP e);
INT redf_cap(OP a, OP b);
INT redf_cap_hoch(OP a, OP n, OP b);
INT redf_cup(OP a, OP b);
INT redf_cup_hoch(OP a, OP n, OP b);
INT reduce_ff(OP a);
INT reduce_inner_tensor_sc(OP a, OP b, OP c);
INT reduce_nc(OP a, OP b);
INT reduce_nc_kranz(OP a, OP b);
INT reduce_symchar(OP a, OP b);
INT reduce_symchar_tafel(OP a, OP b, OP ct);
INT reduceninpaar(OP a, OP b);
INT reell_gram_schmidt(OP A);
INT release_numbers(void);
INT remove_hook(OP a, INT i, INT j, OP c);
INT remove_mp_qnumber_fac(OP mp, INT qn);
INT remove_part_integer(OP a, OP b, OP c);
INT remove_part_part(OP a, OP b, OP c);
INT remove_vec_qnumber(INT qn);
INT remove_zero_terms(OP a);
INT removepartij(OP part, INT i, INT j, OP neupart);
INT reorder_hall_littlewood(OP a, OP b);
INT reorder_schur(OP a, OP b);
INT reorder_vector(OP a, OP b);
INT reorder_vector_apply(OP b);
INT represent_hecke_element(OP partition, OP hecke, OP mat);
INT reset_basis(INT basis);
INT reset_saving(INT saving);
INT reverse_bitvector(OP vec, OP res);
INT reverse_vector(OP a, OP b);
INT rh_test(void);
INT ribbon_matrix(OP a, OP b);
INT ribbon_partition(OP a, INT i, INT j, OP b);
INT rindexword(OP w, OP r, OP stelle, OP erg);
INT rindexword_sub(OP w, OP r, OP stelle, OP erg);
INT rm_rindex(OP word, OP r);
INT root_dimension(OP partition, OP p_root, OP dim);
INT root_normalise_monopoly(OP mono);
INT root_represent_hecke_action(OP partition, OP p_root, OP hecke, OP mat);
INT root_standardise_cold_tableaux_list(OP tableaux, OP p_root, OP result);
INT row_column_matrices(OP a, OP c, OP e);
INT rowwordoftableaux(OP a, OP b);
INT runtime(long *l);
INT rz(OP a, OP b);
INT rz_Dn(OP v, OP r);
INT rz_bar(OP a, OP b);
INT rz_lehmercode(OP lc, OP b);
INT rz_lehmercode_bar(OP a, OP b);
INT rz_perm(OP perm, OP c);
char* SYM_calloc(int a, int b);
int SYM_free(void *a);
char* SYM_malloc(int a);
char* SYM_realloc(void *a, int b);
INT s_b_i(OP a);
OP s_b_o(OP a);
INT s_b_oi(OP a);
OP s_b_u(OP a);
INT s_b_ui(OP a);
INT s_bv_li(OP a);
OP s_ff_c(OP a);
INT s_ff_ci(OP a);
INT s_ff_di(OP a);
INT s_ff_ii(OP a, INT i);
OBJECTKIND s_gr_k(OP a);
OP s_gr_kn(OP a);
OP s_gr_kni(OP a, INT i);
OP s_gr_koor(OP a);
OP s_gr_koori(OP a, INT i);
OP s_gr_na(OP a);
OP s_gr_nai(OP a, INT i);
OP s_gr_s(OP a);
OP s_gr_xkoori(OP a, INT i);
OP s_gr_ykoori(OP a, INT i);
INT s_i_i(OP a);
OP s_kr_g(OP a);
OP s_kr_gi(OP a, INT i);
OP s_kr_gl(OP a);
INT s_kr_gli(OP a);
OP s_kr_i(OP a, INT i);
OP s_kr_v(OP a);
OP s_l_n(OP a);
OP s_l_s(OP a);
OP s_lc_poly(OP pol);
OP s_m_h(OP a);
INT s_m_hash(OP a);
INT s_m_hi(OP a);
OP s_m_ij(OP a, INT i, INT j);
INT s_m_iji(OP a, INT i, INT j);
OP s_m_l(OP a);
INT s_m_li(OP a);
OP s_m_s(OP a);
OP s_mo_k(OP a);
INT s_mo_ki(OP a);
OP s_mo_s(OP a);
OP s_mo_si(OP a, INT i);
INT s_mo_sii(OP a, INT i);
OP s_mo_sl(OP a);
INT s_mo_sli(OP a);
OP s_mz_po(OP a);
OP s_mz_v(OP a);
OP s_mz_vi(OP a, INT i);
INT s_mz_vii(OP a, INT i);
OP s_n_d(OP a);
OP s_n_dcd(OP a);
OP s_n_dci(OP a);
OP s_n_dcp(OP a);
OP s_n_s(OP a);
OBJECTKIND s_o_k(OP a);
OBJECTSELF s_o_s(OP a);
OP s_p_i(OP a, INT i);
INT s_p_ii(OP a, INT i);
OBJECTKIND s_p_k(OP a);
OP s_p_l(OP a);
INT s_p_li(OP a);
OP s_p_s(OP a);
INT s_pa_hash(OP a);
OP s_pa_i(OP a, INT i);
INT s_pa_ii(OP a, INT i);
OBJECTKIND s_pa_k(OP a);
OP s_pa_l(OP a);
INT s_pa_li(OP a);
OP s_pa_s(OP a);
OP s_po_k(OP a);
INT s_po_ki(OP a);
OP s_po_n(OP a);
OP s_po_s(OP a);
OP s_po_si(OP a, INT i);
INT s_po_sii(OP a, INT i);
OP s_po_sl(OP a);
INT s_po_sli(OP a);
OP s_s_k(OP a);
INT s_s_ki(OP a);
OP s_s_n(OP a);
OP s_s_s(OP a);
OP s_s_si(OP a, INT i);
INT s_s_sii(OP a, INT i);
OP s_s_sl(OP a);
INT s_s_sli(OP a);
OP s_sc_d(OP a);
INT s_sc_di(OP a);
OP s_sc_p(OP a);
OP s_sc_pi(OP a, INT i);
INT s_sc_pli(OP a);
OP s_sc_w(OP a);
OP s_sc_wi(OP a, INT i);
INT s_sc_wii(OP a, INT i);
INT s_sc_wli(OP a);
OP s_sch_k(OP a);
INT s_sch_ki(OP a);
OP s_sch_n(OP a);
OP s_sch_s(OP a);
OP s_sch_si(OP a, INT i);
INT s_sch_sii(OP a, INT i);
OP s_sch_sl(OP a);
INT s_sch_sli(OP a);
OP s_spa_g(OP a);
OP s_spa_gi(OP a, INT i);
INT s_spa_gii(OP a, INT i);
INT s_spa_gli(OP a);
OP s_spa_k(OP a);
OP s_spa_ki(OP a, INT i);
INT s_spa_kii(OP a, INT i);
INT s_spa_kli(OP a);
OP s_t_h(OP a);
INT s_t_hi(OP a);
OP s_t_ij(OP a, INT i, INT j);
INT s_t_iji(OP a, INT i, INT j);
OP s_t_l(OP a);
INT s_t_li(OP a);
OP s_t_s(OP a);
OP s_t_u(OP a);
OP s_t_ug(OP a);
INT s_t_ugii(OP a, INT i);
INT s_t_ugli(OP a);
OP s_t_ui(OP a, INT i);
INT s_t_uii(OP a, INT i);
OP s_t_uk(OP a);
INT s_t_ukii(OP a, INT i);
INT s_t_ukli(OP a);
OP s_t_ul(OP a);
INT s_t_uli(OP a);
OP s_t_us(OP a);
OP s_v_i(OP a, INT i);
INT s_v_ii(OP a, INT i);
OP s_v_l(OP a);
INT s_v_li(OP a);
OP s_v_s(OP a);
OP s_w_i(OP a, INT i);
INT s_w_ii(OP a, INT i);
OP s_w_l(OP a);
INT s_w_li(OP a);
OP s_w_s(OP a);
INT s_x_nu_to_ypolynom(OP m, OP grad, INT i, INT j, OP c, OP partv, OP ct);
INT sab(OP D_i, OP D, OP basis, OP M, OP sn_dim);
INT sab_input(OP S, OP SMat, OP M);
INT save_cyclo_list(char* filename);
INT scalarp(OP a);
INT scalarproduct(OP a, OP b, OP c);
INT scalarproduct_bar_schubert(OP a, OP b, OP g);
INT scalarproduct_elmsym(OP a, OP b, OP c);
INT scalarproduct_homsym(OP a, OP b, OP c);
INT scalarproduct_homsym_monomial(OP a, OP b, OP c);
INT scalarproduct_monomial(OP a, OP b, OP c);
INT scalarproduct_nc(OP a, OP b, OP c);
INT scalarproduct_powsym(OP a, OP b, OP c);
INT scalarproduct_powsym_powsym(OP a, OP b, OP c);
INT scalarproduct_schubert(OP a, OP b, OP c);
INT scalarproduct_schur(OP a, OP b, OP c);
INT scalarproduct_schur_schur(OP a, OP b, OP c);
INT scalarproduct_symchar(OP a, OP b, OP c);
INT scalarproduct_vector(OP a, OP b, OP d);
INT scale_monopoly(OP a, OP b);
INT scan(OBJECTKIND kind, OP obj);
INT scan_bar(OP b);
INT scan_bitvector(OP res);
INT scan_bruch(OP a);
INT scan_cyclo(OP a);
INT scan_elmsym(OP a);
INT scan_exponentpartition(OP c);
INT scan_fastpolynom(OP poly);
INT scan_ff(OP a);
INT scan_galois(OP v);
INT scan_gl_nc(OP a, OP b);
INT scan_gral(OP a);
INT scan_homsym(OP a);
INT scan_integer(OP ergebnis);
INT scan_integerbruch(OP a);
INT scan_integermatrix(OP ergebnis);
INT scan_integervector(OP res);
INT scan_kostka(OP a);
INT scan_kranz(OP a);
INT scan_laurent(OP ergebnis);
INT scan_list(OP a, OBJECTKIND givenkind);
INT scan_longint(OP a);
INT scan_matrix(OP ergebnis);
INT scan_monom(OP c);
INT scan_monomial(OP a);
INT scan_monopoly(OP a);
INT scan_nc_kranz(OP a);
INT scan_partition(OP c);
INT scan_parttableaux(OP a);
INT scan_permutation(OP a);
INT scan_permutation_cycle(OP a);
INT scan_permvector(OP res);
INT scan_polynom(OP poly);
INT scan_powsym(OP a);
INT scan_printeingabe(char *text);
INT scan_reihe(OP a);
INT scan_reversepartition(OP c);
INT scan_schubert(OP ergebnis);
INT scan_schur(OP a);
INT scan_skewpartition(OP a);
INT scan_skewsymmetric_matrix(OP ergebnis);
INT scan_skewtableaux(OP a);
INT scan_sqrad(OP a);
INT scan_symchar(OP a);
INT scan_tableaux(OP a);
INT scan_vector(OP res);
INT scan_word(OP ergebnis);
OBJECTKIND scanobjectkind(void);
INT schen_word(OP a, OP bb, OP cb);
INT schensted_row_delete_step(OP raus, OP P, OP Q);
INT schensted_row_insert_step(OP rein, OP P, OP Q);
INT schnitt_mat(OP part, OP prim, OP res);
INT schnitt_schur(OP a, OP b, OP c);
INT schubertp(OP a);
INT schur_ende(void);
INT schur_part_skewschur(OP a, OP b, OP c);
INT schur_power_schur_plet_mult(OP a, OP b, OP c, OP d);
INT schur_powerproduct_schur_plet_mult(OP a, OP b, OP c, OP d);
INT schur_schur_plet(OP part_ext, OP part_inn, OP res);
INT schur_schur_pletbis(OP a, OP b, OP c);
INT sdg(OP part, OP perm, OP D);
INT select_coeff_polynom(OP a, OP b, OP c);
INT select_coeff_reihe(OP a, OP b, OP d);
INT select_column(OP a, INT index, OP b);
INT select_column_tableaux(OP a, INT i, OP b);
INT select_degree_reihe(OP a, OP b, OP c);
OP select_i(OP a, OP b);
INT select_row(OP a, INT index, OP b);
INT select_row_tableaux(OP a, INT i, OP b);
INT set_bv_i(OP a, INT i);
INT set_cyclotomic_parameters(OP p_root);
INT set_lo_nopoint(INT para);
INT set_root_parameters(OP partition, OP p_root);
INT set_tex_polynom_parameter(INT i, INT a);
INT set_useful_monopolies(void);
INT setup_numbers(INT basis, INT saving, char *filename);
INT signum(OP a, OP c);
INT signum_permutation(OP perm, OP b);
INT singularp(OP a);
INT skewpartitionp(OP a);
INT skewplane_plane(OP a, OP b);
INT skip(char *t, OBJECTKIND kind);
INT skip_comment(void);
INT skip_integer(char *t);
INT sn_character(OP n, OP partition, INT flag, OP character);
INT sn_dimension(OP n, OP partition, OP dim);
INT sn_tableaux(OP n, OP partition, INT flag, OP list);
INT so_character(OP n, OP partition, INT flag, OP character);
INT so_dimension(OP n, OP partition, OP dim);
INT so_tableaux(OP n, OP partition, INT flag, OP list);
INT sort_rows_tableaux_apply(OP b);
INT sort_vector(OP vec);
INT sp_br(OP br);
INT sp_character(OP n, OP partition, OP character);
INT sp_dimension(OP n, OP partition, OP dim);
INT sp_tableaux(OP n, OP partition, OP list);
INT spalten_summe(OP a, OP b);
INT spaltenanfang(OP a, INT b);
INT spaltenende(OP a, INT b);
INT specht_dg(OP a, OP b, OP c);
INT specht_irred_characteristik(OP a, OP b);
INT specht_m_part_sc(OP a, OP b);
INT specht_poly(OP a, OP b);
INT specht_powersum(OP a, OP b);
INT special_eq(OP a, OP b);
INT special_mult_apply_homsym_homsym(OP a, OP b, OP mpm);
INT speicher_anfang(void);
INT speicher_ende(void);
INT spin_tableaux_character(OP list, OP r, OP character);
INT split(OP n, OP par);
INT split_hashtable(OP a, OP b, OP c);
INT splitpart(OP a, OP p1, OP p2);
INT sprint(char *string, OP obj);
INT sprint_ff(char *f, OP a);
INT sprint_integer(char *string, OP a);
INT sprint_integervector(char *t, OP a);
INT sprint_longint(char *t, OP l);
INT sprint_partition(char *f, OP partobj);
INT sprint_permutation(char *t, OP a);
INT sprint_skewpartition(char *t, OP s);
INT sprint_vector(char *t, OP a);
INT square_apply(OP a);
INT square_apply_integer(OP a);
INT square_apply_longint(OP a);
INT square_free_part(OP a, OP b, OP c, OP la, OP lb, OP lc);
INT square_free_part_0(OP la, OP lb, OP lc);
INT squareroot(OP a, OP b);
INT squareroot_bruch(OP a, OP b);
INT squareroot_integer(OP a, OP b);
INT squareroot_longint(OP a, OP b);
INT sscan( char *t, OBJECTKIND kind, OP obj);
INT sscan_bar(char *t, OP a);
INT sscan_bitvector(char *t, OP a);
INT sscan_elmsym(char *t, OP a);
INT sscan_homsym(char *t, OP a);
INT sscan_integer(char *t, OP a);
INT sscan_integervector(char *t, OP a);
INT sscan_longint(char *t, OP a);
INT sscan_partition(char *t, OP a);
INT sscan_permutation(char *t, OP a);
INT sscan_permvector(char *t, OP a);
INT sscan_reversepartition(char *t, OP a);
INT sscan_schur(char *t, OP a);
INT sscan_word(char *t, OP a);
INT standardise_cold_tableaux_list(OP tableaux, OP result);
INT standardise_cyclo(OP a);
INT standardp(OP a);
INT starpart(OP a, OP b, OP c);
INT start_longint(void);
INT starting_bar_schubert(OP n, OP res);
INT starttableaux(OP t, OP s);
INT std_perm(OP a, OP b);
INT stirling_first_tafel(OP a, OP b);
INT stirling_numbers_second_kind_vector(OP a, OP b);
INT stirling_second_number(OP n, OP k, OP result);
INT stirling_second_number_kostka(OP n, OP k, OP result);
INT stirling_second_number_tafel(OP n, OP k, OP result, OP t);
INT stirling_second_tafel(OP a, OP b);
INT store_result_0(char *t, OP c);
INT store_result_1(OP a, char *t, OP c);
INT store_result_2(OP a, OP b, char *t, OP c);
INT store_result_3(OP a, OP b, OP d, char *t, OP c);
INT store_result_4(OP a, OP b, OP d, OP e, char *t, OP c);
INT store_result_5(OP a, OP b, OP d, OP e, OP f, char *t, OP c);
INT strict_to_odd_part(OP a, OP b);
INT strictp(OP a);
INT strong_check_barp(OP a);
INT strong_check_permutationp(OP a);
INT strong_generators(OP a, OP b);
INT sub(OP a, OP b, OP c);
INT sub_apply(OP a, OP b);
INT sub_comp_bv(OP a, OP b);
INT sub_comp_part(OP a, OP b);
INT sub_default(OP a, OP b, OP c);
INT sub_part_part(OP a, OP b, OP c);
INT substitute_one_matrix(OP mat);
INT substitute_one_monopoly(OP mp);
INT sum_integervector(OP vecobj, OP res);
INT sum_matrix(OP a, OP b);
INT sum_vector(OP vecobj, OP res);
INT sup_bitvector(OP bit1, OP bit2, OP res);
INT sup_bitvector_apply(OP bit1, OP res);
INT swap(OP a, OP b);
INT symchar_hoch_n(OP a, OP n, OP erg);
INT symmetricp(OP a);
INT symmetricp_i(OP a, INT i);
INT symmetricp_matrix(OP a);
INT t_2SCHUBERT_POLYNOM(OP a, OP b);
INT t_BARCYCLE_BAR(OP a, OP b);
INT t_BAR_BARCYCLE(OP a, OP b);
INT t_BINTREE_ELMSYM(OP a, OP b);
INT t_BINTREE_ELMSYM_apply(OP a);
INT t_BINTREE_GRAL(OP a, OP b);
INT t_BINTREE_HOMSYM(OP a, OP b);
INT t_BINTREE_HOMSYM_apply(OP a);
INT t_BINTREE_LIST(OP a, OP b);
INT t_BINTREE_MONOMIAL(OP a, OP b);
INT t_BINTREE_MONOMIAL_apply(OP a);
INT t_BINTREE_POLYNOM(OP a, OP b);
INT t_BINTREE_POLYNOM_apply(OP a);
INT t_BINTREE_POWSYM(OP a, OP b);
INT t_BINTREE_POWSYM_apply(OP a);
INT t_BINTREE_SCHUBERT(OP a, OP b);
INT t_BINTREE_SCHUR(OP a, OP b);
INT t_BINTREE_SCHUR_apply(OP a);
INT t_BINTREE_VECTOR(OP a, OP b);
INT t_BITVECTOR_INTVECTOR(OP a, OP b);
INT t_BIT_VECTOR(OP a, OP b);
INT t_BRUCH_LAURENT(OP br, OP vc);
INT t_ELMSYM_ELMSYM(OP a, OP b);
INT t_ELMSYM_HASHTABLE(OP a, OP b);
INT t_ELMSYM_HOMSYM(OP a, OP b);
INT t_ELMSYM_MONOMIAL(OP a, OP b);
INT t_ELMSYM_POWSYM(OP a, OP b);
INT t_ELMSYM_SCHUR(OP a, OP b);
INT t_EXPONENT_VECTOR(OP a, OP b);
INT t_EXPONENT_VECTOR_apply(OP a);
INT t_FROBENIUS_VECTOR(OP a, OP b);
INT t_HASHTABLE_ELMSYM(OP a, OP b);
INT t_HASHTABLE_ELMSYM_apply(OP a);
INT t_HASHTABLE_HOMSYM(OP a, OP b);
INT t_HASHTABLE_HOMSYM_apply(OP a);
INT t_HASHTABLE_MONOMIAL(OP a, OP b);
INT t_HASHTABLE_MONOMIAL_apply(OP a);
INT t_HASHTABLE_POLYNOM(OP a, OP b);
INT t_HASHTABLE_POLYNOM_apply(OP a);
INT t_HASHTABLE_POWSYM(OP a, OP b);
INT t_HASHTABLE_POWSYM_apply(OP a);
INT t_HASHTABLE_SCHUR(OP a, OP b);
INT t_HASHTABLE_SCHUR_apply(OP a);
INT t_HASHTABLE_VECTOR(OP a, OP v);
INT t_HOMSYM_ELMSYM(OP a, OP b);
INT t_HOMSYM_HASHTABLE(OP a, OP b);
INT t_HOMSYM_HOMSYM(OP a, OP b);
INT t_HOMSYM_MONOMIAL(OP a, OP b);
INT t_HOMSYM_POWSYM(OP a, OP b);
INT t_HOMSYM_SCHUR(OP a, OP b);
INT t_INTEGER_FF(OP a, OP b, OP c);
INT t_INTEGER_LAURENT(OP n, OP vc);
INT t_INTVECTOR_BITVECTOR(OP a, OP b);
INT t_INTVECTOR_UCHAR(OP a, char **b);
INT t_LAURENT_OBJ(OP vc, OP mp);
INT t_LIST_POLYNOM(OP a, OP b);
INT t_LIST_VECTOR(OP a, OP b);
INT t_MA_MONOPOLY_MA_POLYNOM(OP ma0, OP ma);
INT t_MONOMIAL_ELMSYM(OP a, OP b);
INT t_MONOMIAL_HASHTABLE(OP a, OP b);
INT t_MONOMIAL_HOMSYM(OP a, OP b);
INT t_MONOMIAL_MONOMIAL(OP a, OP b);
INT t_MONOMIAL_POWSYM(OP a, OP b);
INT t_MONOMIAL_SCHUR(OP a, OP b);
INT t_MONOPOLY_LAURENT(OP mp, OP vc);
INT t_MONOPOLY_POLYNOM(OP a, OP b);
INT t_OBJ_LAURENT(OP obj, OP vc);
INT t_PARTITION_AUGPART(OP a, OP b);
INT t_PERMUTATION_SCHUBERT(OP a, OP b);
INT t_POLYNOM_ELMSYM(OP a, OP b);
INT t_POLYNOM_LAURENT(OP po, OP vc);
INT t_POLYNOM_MONOMIAL(OP a, OP b);
INT t_POLYNOM_MONOPOLY(OP a, OP b);
INT t_POLYNOM_POWER(OP a, OP b);
INT t_POLYNOM_SCHUBERT(OP pol, OP sch);
INT t_POLYNOM_SCHUR(OP a, OP b);
INT t_POWSYM_ELMSYM(OP a, OP b);
INT t_POWSYM_HASHTABLE(OP a, OP b);
INT t_POWSYM_HOMSYM(OP a, OP b);
INT t_POWSYM_MONOMIAL(OP a, OP b);
INT t_POWSYM_POWSYM(OP a, OP b);
INT t_POWSYM_SCHUR(OP a, OP b);
INT t_REIHE_POLYNOM(OP a, OP b);
INT t_SCHUBERT_POLYNOM(OP a, OP b);
INT t_SCHUBERT_SCHUR(OP a, OP b);
INT t_SCHUR_ELMSYM(OP a, OP b);
INT t_SCHUR_HASHTABLE(OP a, OP b);
INT t_SCHUR_HOMSYM(OP a, OP b);
INT t_SCHUR_MONOMIAL(OP a, OP b);
INT t_SCHUR_POWSYM(OP a, OP b);
INT t_SCHUR_SCHUR(OP a, OP b);
INT t_SCHUR_SYMCHAR(OP a, OP b);
INT t_UCHAR_INTVECTOR(char *a, OP b);
INT t_VECTOR_BIT(OP a, OP b);
INT t_VECTOR_BITREC(OP a, OP bitperm);
INT t_VECTOR_EXPONENT(OP von, OP nach);
INT t_VECTOR_FROB(OP a, OP b);
INT t_VECTOR_FROBENIUS(OP a, OP b);
INT t_VECTOR_LIST(OP a, OP b);
INT t_VECTOR_POLYNOM(OP a, OP b);
INT t_VECTOR_ZYKEL(OP a, OP b);
INT t_ZYKEL_VECTOR(OP a, OP b);
INT t_augpart_part(OP a, OP b);
INT t_bar_doubleperm(OP a, OP b);
INT t_forall_monomials_in_a(OP a, OP b, OP f, INT (*partf)(OP,OP,OP));
INT t_galois_polynom(OP g, OP p);
INT t_int_longint(OP a, OP c);
INT t_longint_int(OP a);
INT t_loop_partition(OP a, OP b, OP f, INT (*intf)(OP,OP,OP), INT (*multf)(OP,OP,OP), INT (*multapplyf)(OP,OP));
INT t_polynom_galois(OP p ,INT c, INT d, OP g);
INT t_productexponent(OP a, OP b, OP f, INT (*tf)(OP,OP,OP), OP (*ff)(OP));
INT t_schur_jacobi_trudi(OP a, OP b, OP f, INT (*intf)(OP,OP,OP), INT (*multf)(OP,OP,OP,OP));
INT t_schur_naegelsbach(OP a, OP b, OP f, INT (*intf)(OP,OP,OP), INT (*multf)(OP,OP,OP,OP));
INT t_splitpart(OP a, OP b, OP f, INT (*tf)(OP,OP,OP), INT (*mf)(OP,OP,OP,OP));
INT t_vperm_zperm(OP a, OP b);
INT t_zperm_vperm(OP a, OP b);
INT tab_anfang(void);
INT tab_ende(void);
INT tab_funk(OP n, OP part, OP tab, OP res);
INT tableaux_character(OP list, OP r, OP character);
INT tableauxp(OP a);
INT teh___faktor(OP a, OP b, OP f);
INT teh_elmsym__faktor(OP a, OP b, OP f);
INT teh_ende(void);
INT teh_hashtable__faktor(OP a, OP b, OP f);
INT teh_integer__faktor(OP a, OP b, OP f);
INT teh_partition__faktor(OP a, OP b, OP f);
INT tem_ende(void);
INT tem_integer__faktor(OP a, OP b, OP f);
INT tem_partition__faktor(OP a, OP b, OP f);
INT tep___faktor(OP a, OP b, OP f);
INT tep_elmsym__faktor(OP a, OP b, OP f);
INT tep_ende(void);
INT tep_hashtable__faktor(OP a, OP b, OP f);
INT tep_integer__faktor(OP a, OP b, OP f);
INT tep_partition__faktor(OP a, OP b, OP f);
INT tes___faktor(OP a, OP b, OP f);
INT tes_elmsym__faktor(OP a, OP b, OP f);
INT tes_hashtable__faktor(OP a, OP b, OP f);
INT tes_integer__faktor(OP a, OP b, OP f);
INT tes_partition__faktor(OP a, OP b, OP f);
INT test_brc(void);
INT test_dcp(void);
INT test_kostka(void);
INT test_list(void);
INT test_longint(void);
INT test_matrix(void);
INT test_mdg(void);
INT test_ndg(void);
INT test_perm(void);
INT test_plet(void);
INT test_poly(void);
INT test_schubert(void);
INT test_schur(void);
INT test_symchar(void);
INT tex(OP obj);
INT tex_2schubert_monom_summe(OP b);
INT tex_bruch(OP a);
INT tex_cyclo(OP a);
INT tex_hall_littlewood(OP a);
INT tex_hecke_monopoly(OP a);
INT tex_integer(OP a);
INT tex_kostka(OP koma, OP vector);
INT tex_lc(OP perm);
INT tex_list(OP list);
INT tex_longint(OP l);
INT tex_matrix(OP obj);
INT tex_matrix_co(OP obj, INT (*f)(OP));
INT tex_monom(OP monom);
INT tex_monom_plus(INT form, OP a);
INT tex_monopoly(OP a);
INT tex_partition(OP part);
INT tex_permutation(OP perm);
INT tex_polynom(OP poly);
INT tex_rz(OP obj);
INT tex_schubert(OP poly);
INT tex_schur(OP poly);
INT tex_sqrad(OP a);
INT tex_symchar(OP a);
INT tex_tableaux(OP a);
INT tex_vector(OP vecobj);
INT the_integer__faktor(OP a, OP b, OP f);
INT thm_ende(void);
INT thm_integer__faktor(OP a, OP b, OP f);
INT thm_partition__faktor(OP a, OP b, OP f);
INT thp___faktor(OP a, OP b, OP f);
INT thp_ende(void);
INT thp_homsym__faktor(OP a, OP b, OP f);
INT thp_integer__faktor(OP a, OP b, OP faktor);
INT thp_partition__faktor(OP a, OP b, OP f);
INT tidy(OP a);
INT tl_set_index_inc(INT p);
INT tl_set_max_numb(INT p);
INT tl_set_prime(INT p);
INT tme___faktor(OP a, OP b, OP f);
INT tme_ende(void);
INT tme_hashtable__faktor(OP a, OP b, OP f);
INT tme_integer__faktor(OP a, OP b, OP f);
INT tme_monomial__faktor(OP a, OP b, OP f);
INT tme_partition__faktor(OP a, OP b, OP f);
INT tmh___faktor(OP a, OP b, OP faktor);
INT tmh_ende(void);
INT tmh_integer__faktor(OP a, OP b, OP faktor);
INT tmh_monomial__faktor(OP a, OP b, OP faktor);
INT tmh_partition__faktor(OP a, OP b, OP faktor);
INT tmp___faktor(OP a, OP b, OP f);
INT tmp_int__faktor(INT a, OP b, OP f);
INT tmp_integer__faktor(OP a, OP b, OP f);
INT tmp_monomial__faktor(OP a, OP b, OP f);
INT tmp_partition__faktor(OP a, OP b, OP f);
INT tpe___faktor(OP a, OP b, OP f);
INT tpe_hashtable__faktor(OP a, OP b, OP f);
INT tpe_integer__faktor(OP a, OP b, OP f);
INT tpe_partition__faktor(OP a, OP b, OP f);
INT tpe_powsym__faktor(OP a, OP b, OP f);
INT tph___faktor(OP a, OP b, OP f);
INT tph_hashtable__faktor(OP a, OP b, OP f);
INT tph_integer__faktor(OP a, OP b, OP f);
INT tph_partition__faktor(OP a, OP b, OP f);
INT tph_powsym__faktor(OP a, OP b, OP f);
INT tpm___faktor(OP a, OP b, OP f);
INT tpm_hashtable__faktor(OP a, OP b, OP f);
INT tpm_integer__faktor(OP a, OP b, OP f);
INT tpm_partition__faktor(OP a, OP b, OP f);
INT tpm_powsym__faktor(OP a, OP b, OP f);
INT tps___faktor(OP a, OP b, OP f);
INT trace(OP a, OP b);
INT trace_matrix(OP a, OP b);
INT trafo_check(OP part);
INT trans2formlist(OP ve, OP vz, OP nach, INT (*tf)(OP,OP,OP));
INT trans_index_monopoly_cyclo(OP a, OP b, OP c);
INT transform_apply_list(OP von, INT (*tf)(OP));
INT transformlist(OP von, OP nach, INT (*tf)(OP,OP));
INT transpose(OP a, OP b);
INT transpose_matrix(OP a, OP b);
INT transpose_second_matrix(OP a, OP b);
INT tse___faktor(OP a, OP b, OP f);
INT tse___faktor_slow(OP a, OP b, OP f);
INT tse_integer__faktor(OP a, OP b, OP f);
INT tse_partition__faktor(OP a, OP b, OP f);
INT tse_schur__faktor(OP a, OP b, OP f);
INT tsh___faktor(OP a, OP b, OP f);
INT tsh_eval_jt(OP b, OP f, OP m);
INT tsh_hashtable__faktor(OP a, OP b, OP f);
INT tsh_integer__faktor(OP a, OP b, OP f);
INT tsh_jt(OP a, OP m);
INT tsh_partition__faktor(OP a, OP b, OP f);
INT tsh_schur__faktor(OP a, OP b, OP f);
INT tsm___faktor(OP a, OP b, OP f);
INT tsm_integer__faktor(OP a, OP b, OP f);
INT tsm_partition__faktor(OP a, OP b, OP f);
INT tsm_schur__faktor(OP a, OP b, OP f);
INT tsp___faktor(OP a, OP b, OP f);
INT tsp_integer__faktor(OP a, OP b, OP f);
INT tsp_partition__faktor(OP a, OP b, OP f);
INT tsp_schur__faktor(OP a, OP b, OP f);
INT twoword_knuth(OP a, OP b, OP p_symbol, OP q_symbol);
INT twoword_matrix(OP c_index, OP row_index, OP matrix);
INT txx_null__faktor(OP b, OP f);
INT typusorder(OP a, OP ggrad, OP ngrad, OP b, OP vec);
INT umriss_tableaux(OP a, OP b);
INT unimodalp(OP a);
INT unitp_galois(OP g);
INT unrank_degree_permutation(OP a, OP c, OP b);
INT unrank_given_q_ff(OP a, OP q, OP b);
INT unrank_k_subset(OP number, OP n, OP k, OP set);
INT unrank_permutation(OP a, OP b);
INT unrank_subset(OP b, OP c, OP d);
INT unset_bv_i(OP a, INT i);
INT usersort_vector(OP vec, int (*f)(const void *, const void *));
INT vander(OP n, OP res);
INT vec_anfang(void);
INT vec_ende(void);
INT vec_mat_mult(OP vec, OP mat, OP hvek);
INT vectorofzerodivisors_galois(OP c, OP d, OP v);
INT vectorp(OP a);
INT vertikal_sum(OP n, OP a);
INT vexillaryp(OP a, OP part);
INT vexillaryp_permutation(OP perm, OP part);
INT vminus(OP tab, OP v);
INT vminus_hecke(OP a, OP b);
INT vminus_tabloid(OP a, OP b);
INT vorgaenger_bruhat(OP a, OP b);
INT vorgaenger_bruhat_strong(OP a, OP b);
INT vorgaenger_bruhat_weak(OP a, OP b);
INT vorgaenger_young(OP a, OP b);
INT vorgaenger_young_skewpartition(OP a, OP b);
INT weight(OP a, OP b);
INT weight_augpart(OP a, OP b);
INT weight_partition(OP a, OP b);
INT weight_skewpartition(OP a, OP b);
INT weight_tableaux(OP a, OP b);
INT weight_vector(OP a, OP b);
INT wert(INT index, OP split_class, OP res);
INT werte_Polynom_aus(OP a, OP poly, OP erg);
INT which_part(OP per);
INT word_schen(OP a, OP p_symbol, OP q_symbol);
INT word_tableaux(OP a, OP b);
INT wordoftableaux(OP a, OP b);
INT wrong_type_oneparameter(char *t, OP a);
INT wrong_type_twoparameter(char *t, OP a, OP b);
INT ym_min(OP form, OP res);
INT young_alt_scalar_tafel(OP n, OP res, OP yt);
INT young_character(OP a, OP res, OP yt);
INT young_ideal(OP a, OP b);
INT young_polynom(OP a, OP l);
INT young_scalar_tafel(OP n, OP res, OP yt);
INT young_tafel(OP a, OP res, OP ct, OP kt);
INT youngp(OP a);
INT zeilen_summe(OP a, OP b);
INT zeilenanfang(OP tab, INT zn);
INT zeilenende(OP tab, INT zn);
INT zentralprim(OP part, OP idp);
INT zykelind_An(OP l, OP pol);
INT zykelind_Cn(OP l, OP pol);
INT zykelind_Dn(OP l, OP pol);
INT zykelind_Sn(OP l, OP pol);
INT zykelind_aff1Zn(OP a, OP b);
INT zykelind_affkq(OP k, OP q, OP ergeb);
INT zykelind_affkzn(OP k, OP n, OP cy_ind);
INT zykelind_arb(OP genvec, OP pol);
INT zykelind_centralizer(OP typ, OP res);
INT zykelind_cube(OP aa);
INT zykelind_cube_edges(OP a);
INT zykelind_cube_edges_extended(OP a);
INT zykelind_cube_extended(OP aa);
INT zykelind_cube_faces(OP a);
INT zykelind_cube_faces_extended(OP a);
INT zykelind_cube_vertices(OP a);
INT zykelind_cube_vertices_extended(OP a);
INT zykelind_dec(OP a, OP b);
INT zykelind_dec_apply(OP a);
INT zykelind_dir_prod(OP a, OP b, OP c);
INT zykelind_dir_prod_apply(OP a, OP b);
INT zykelind_dir_summ(OP a, OP b, OP c);
INT zykelind_dir_summ_apply(OP a, OP b);
INT zykelind_dodecahedron(OP aa);
INT zykelind_dodecahedron_edges(OP a);
INT zykelind_dodecahedron_edges_extended(OP a);
INT zykelind_dodecahedron_extended(OP aa);
INT zykelind_dodecahedron_faces(OP a);
INT zykelind_dodecahedron_faces_extended(OP a);
INT zykelind_dodecahedron_vertices(OP a);
INT zykelind_dodecahedron_vertices_extended(OP a);
INT zykelind_exponentiation(OP a, OP b, OP c);
INT zykelind_glkq(OP k, OP q, OP ergeb);
INT zykelind_glkzn(OP k, OP n, OP cy_ind);
INT zykelind_hoch_dir_prod(OP a, OP c, OP b);
INT zykelind_hoch_dir_summ(OP a, OP c, OP b);
INT zykelind_inc(OP a);
INT zykelind_kranz(OP a, OP b, OP c);
INT zykelind_on_2sets(OP a, OP b);
INT zykelind_on_ksubsets(OP a, OP c, OP b);
INT zykelind_on_ktuples(OP a, OP c, OP b);
INT zykelind_on_ktuples_injective(OP a, OP c, OP b);
INT zykelind_on_pairs(OP a, OP b);
INT zykelind_on_pairs_disjunkt(OP a, OP bb);
INT zykelind_on_pairs_oriented(OP a, OP b);
INT zykelind_on_pairs_reduced(OP a, OP b);
INT zykelind_on_power_set(OP a, OP b);
INT zykelind_pglkq(OP k, OP q, OP ergeb);
INT zykelind_plethysm(OP a, OP b, OP c);
INT zykelind_stabilizer_part(OP a, OP b);
INT zykelind_superp_lin_dir_graphs(OP a, OP bb);
INT zykelind_test(void);
INT zykelind_tetraeder(OP aa);
INT zykelind_tetraeder_edges(OP a);
INT zykelind_tetraeder_edges_extended(OP a);
INT zykelind_tetraeder_extended(OP aa);
INT zykelind_tetraeder_faces(OP a);
INT zykelind_tetraeder_faces_extended(OP a);
INT zykelind_tetraeder_vertices(OP a);
INT zykelind_tetraeder_vertices_extended(OP a);
INT zykeltyp(OP a, OP b);
INT zykeltyp_hoch_n(OP a, OP b, OP c);
INT zykeltyp_permutation(OP a, OP b);
INT zykeltyp_pi_hoch(OP a, OP b, OP c);

#endif
