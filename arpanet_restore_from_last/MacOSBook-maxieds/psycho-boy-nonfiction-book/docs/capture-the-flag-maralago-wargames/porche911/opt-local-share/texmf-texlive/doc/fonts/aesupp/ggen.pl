#!/usr/bin/perl -w

use strict;

### Ecoding files...
my @encfiles = ("q-ec.enc", "q-rm.enc");
my %namebase;
my %mapnamebase;
my %tfm;

## TG Fonts
$namebase{"aebkbi"}="aebonum-bolditalic";
$namebase{"aebkri"}="aebonum-italic";
$namebase{"aeplbi"}="aepagella-bolditalic";
$namebase{"aeplri"}="aepagella-italic";
$namebase{"aecsbi"}="aeschola-bolditalic";
$namebase{"aecsri"}="aeschola-italic";

## LM Fonts
$namebase{"aemtti10"}="aemmono10-italic";
$namebase{"aembxi10"}="aemroman10-bolditalic";
$namebase{"aemri10"}="aemroman10-italic";
$namebase{"aemri12"}="aemroman12-italic";
$namebase{"aemri7"}="aemroman7-italic";
$namebase{"aemri8"}="aemroman8-italic";
$namebase{"aemri9"}="aemroman9-italic";

## TG Fonts
$mapnamebase{"aebkbi"}="AeBonum-BoldItalic";
$mapnamebase{"aebkri"}="AeBonum-Italic\t";
$mapnamebase{"aeplbi"}="AePagella-BoldItalic";
$mapnamebase{"aeplri"}="AePagella-Italic";
$mapnamebase{"aecsbi"}="AeSchola-BoldItalic";
$mapnamebase{"aecsri"}="AeSchola-Italic\t";

## LM Fonts
$mapnamebase{"aemtti10"}="AeMmono10-Italic";
$mapnamebase{"aembxi10"}="AeMroman10-BoldItalic";
$mapnamebase{"aemri10"}="AeMroman10-Italic";
$mapnamebase{"aemri12"}="AeMroman12-Italic";
$mapnamebase{"aemri7"}="AeMroman7-Italic";
$mapnamebase{"aemri8"}="AeMroman8-Italic";
$mapnamebase{"aemri9"}="AeMroman9-Italic";

## TG Fonts
$tfm{"aebkbi"}="ec-qbkbi.tfm";
$tfm{"aebkri"}="ec-qbkri.tfm";
$tfm{"aeplbi"}="ec-qplbi.tfm";
$tfm{"aeplri"}="ec-qplri.tfm";
$tfm{"aecsbi"}="ec-qcsbi.tfm";
$tfm{"aecsri"}="ec-qcsri.tfm";

## LM Fonts
$tfm{"aemtti10"}="ec-lmtti10.tfm";
$tfm{"aembxi10"}="ec-lmbxi10.tfm";
$tfm{"aemri10"}="ec-lmr10.tfm";
$tfm{"aemri12"}="ec-lmr12.tfm";
$tfm{"aemri7"}="ec-lmr7.tfm";
$tfm{"aemri8"}="ec-lmr8.tfm";
$tfm{"aemri9"}="ec-lmr9.tfm";


my @MapEntries;
my @fonts = ("aebkbi", "aebkri", "aeplbi", "aeplri", "aecsri", "aecsbi");
push (@fonts, "aemtti10", "aembxi10", "aemri10", "aemri12", "aemri7", "aemri8", "aemri9");

foreach (@fonts) {
    my $inname = "$namebase{$_}.sfd";
    my $otfname = "$namebase{$_}.otf";
    my $mapname = $mapnamebase{$_};
    my $pfbname = "$_.pfb";
    push (@MapEntries, "ec-$_\t$mapname\t<q-ec.enc\t<$pfbname\n");
    push (@MapEntries, "rm-$_\t$mapname\t<q-rm.enc\t<$pfbname\n");
    open (PY, ">genfonts.pe") or die "Cannot write to genfonts-py";
    print PY<<EOF;
#!/usr/bin/fontforge -lang=ff
# Auto-generated file. Do not edit.

Open(\'$inname\')
MergeFeature(\'$tfm{$_}\')
Generate(\'$otfname\')

LoadEncodingFile(\'tg.enc\')
Reencode(\'tgenc\')
Generate('$pfbname')
EOF
    close PY;

#    system ("./genfonts.pe");
}

open (MAP, ">aefonts.map") or die "Cannot write to aefonts.map";
print MAP @MapEntries;
close MAP;

