import "mathjax-full/js/input/tex/action/ActionConfiguration";
import "mathjax-full/js/input/tex/ams/AmsConfiguration";
import "mathjax-full/js/input/tex/amscd/AmsCdConfiguration";
import "mathjax-full/js/input/tex/autoload/AutoloadConfiguration";
import "mathjax-full/js/input/tex/base/BaseConfiguration";
import "mathjax-full/js/input/tex/bbox/BboxConfiguration";
import "mathjax-full/js/input/tex/boldsymbol/BoldsymbolConfiguration";
import "mathjax-full/js/input/tex/braket/BraketConfiguration";
import "mathjax-full/js/input/tex/bussproofs/BussproofsConfiguration";
import "mathjax-full/js/input/tex/cancel/CancelConfiguration";
import "mathjax-full/js/input/tex/cases/CasesConfiguration";
import "mathjax-full/js/input/tex/centernot/CenternotConfiguration";
import "mathjax-full/js/input/tex/color/ColorConfiguration";
import "mathjax-full/js/input/tex/colortbl/ColortblConfiguration";
import "mathjax-full/js/input/tex/colorv2/ColorV2Configuration";
import "mathjax-full/js/input/tex/configmacros/ConfigMacrosConfiguration";
import "mathjax-full/js/input/tex/empheq/EmpheqConfiguration";
import "mathjax-full/js/input/tex/enclose/EncloseConfiguration";
import "mathjax-full/js/input/tex/extpfeil/ExtpfeilConfiguration";
import "mathjax-full/js/input/tex/gensymb/GensymbConfiguration";
import "mathjax-full/js/input/tex/html/HtmlConfiguration";
import "mathjax-full/js/input/tex/mathtools/MathtoolsConfiguration";
import "mathjax-full/js/input/tex/mhchem/MhchemConfiguration";
import "mathjax-full/js/input/tex/newcommand/NewcommandConfiguration";
import "mathjax-full/js/input/tex/noerrors/NoErrorsConfiguration";
import "mathjax-full/js/input/tex/noundefined/NoUndefinedConfiguration";
import "mathjax-full/js/input/tex/physics/PhysicsConfiguration";
import "mathjax-full/js/input/tex/require/RequireConfiguration";
import "mathjax-full/js/input/tex/setoptions/SetOptionsConfiguration";
import "mathjax-full/js/input/tex/tagformat/TagFormatConfiguration";
import "mathjax-full/js/input/tex/textcomp/TextcompConfiguration";
import "mathjax-full/js/input/tex/textmacros/TextMacrosConfiguration";
import "mathjax-full/js/input/tex/unicode/UnicodeConfiguration";
import "mathjax-full/js/input/tex/upgreek/UpgreekConfiguration";
import "mathjax-full/js/input/tex/verb/VerbConfiguration";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const MathJax: any;
if (typeof MathJax !== "undefined" && MathJax.loader) {
  MathJax.loader.preLoad(
    "input/tex-base",
    "[tex]/action",
    "[tex]/ams",
    "[tex]/amscd",
    "[tex]/autoload",
    "[tex]/bbox",
    "[tex]/boldsymbol",
    "[tex]/braket",
    "[tex]/bussproofs",
    "[tex]/cancel",
    "[tex]/cases",
    "[tex]/centernot",
    "[tex]/color",
    "[tex]/colortbl",
    "[tex]/colorv2",
    "[tex]/configmacros",
    "[tex]/empheq",
    "[tex]/enclose",
    "[tex]/extpfeil",
    "[tex]/gensymb",
    "[tex]/html",
    "[tex]/mathtools",
    "[tex]/mhchem",
    "[tex]/newcommand",
    "[tex]/noerrors",
    "[tex]/noundefined",
    "[tex]/physics",
    "[tex]/require",
    "[tex]/setoptions",
    "[tex]/tagformat",
    "[tex]/textcomp",
    "[tex]/textmacros",
    "[tex]/unicode",
    "[tex]/upgreek",
    "[tex]/verb",
  );
}

export const AllPackages: string[] = [
  "base",
  "action",
  "ams",
  "amscd",
  "autoload",
  "bbox",
  "boldsymbol",
  "braket",
  "bussproofs",
  "cancel",
  "cases",
  "centernot",
  "color",
  "colortbl",
  "colorv2",
  "configmacros",
  "empheq",
  "enclose",
  "extpfeil",
  "gensymb",
  "html",
  "mathtools",
  "mhchem",
  "newcommand",
  "noerrors",
  "noundefined",
  "physics",
  "require",
  "setoptions",
  "tagformat",
  "textcomp",
  "textmacros",
  "unicode",
  "upgreek",
  "verb",
];
