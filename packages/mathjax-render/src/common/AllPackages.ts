import "mathjax-full/js/input/tex/action/ActionConfiguration.js";
import "mathjax-full/js/input/tex/ams/AmsConfiguration.js";
import "mathjax-full/js/input/tex/amscd/AmsCdConfiguration.js";
import "mathjax-full/js/input/tex/autoload/AutoloadConfiguration.js";
import "mathjax-full/js/input/tex/base/BaseConfiguration.js";
import "mathjax-full/js/input/tex/bbox/BboxConfiguration.js";
import "mathjax-full/js/input/tex/boldsymbol/BoldsymbolConfiguration.js";
import "mathjax-full/js/input/tex/braket/BraketConfiguration.js";
import "mathjax-full/js/input/tex/bussproofs/BussproofsConfiguration.js";
import "mathjax-full/js/input/tex/cancel/CancelConfiguration.js";
import "mathjax-full/js/input/tex/cases/CasesConfiguration.js";
import "mathjax-full/js/input/tex/centernot/CenternotConfiguration.js";
import "mathjax-full/js/input/tex/color/ColorConfiguration.js";
import "mathjax-full/js/input/tex/colortbl/ColortblConfiguration.js";
import "mathjax-full/js/input/tex/colorv2/ColorV2Configuration.js";
import "mathjax-full/js/input/tex/configmacros/ConfigMacrosConfiguration.js";
import "mathjax-full/js/input/tex/empheq/EmpheqConfiguration.js";
import "mathjax-full/js/input/tex/enclose/EncloseConfiguration.js";
import "mathjax-full/js/input/tex/extpfeil/ExtpfeilConfiguration.js";
import "mathjax-full/js/input/tex/gensymb/GensymbConfiguration.js";
import "mathjax-full/js/input/tex/html/HtmlConfiguration.js";
import "mathjax-full/js/input/tex/mathtools/MathtoolsConfiguration.js";
import "mathjax-full/js/input/tex/mhchem/MhchemConfiguration.js";
import "mathjax-full/js/input/tex/newcommand/NewcommandConfiguration.js";
import "mathjax-full/js/input/tex/noerrors/NoErrorsConfiguration.js";
import "mathjax-full/js/input/tex/noundefined/NoUndefinedConfiguration.js";
import "mathjax-full/js/input/tex/physics/PhysicsConfiguration.js";
import "mathjax-full/js/input/tex/require/RequireConfiguration.js";
import "mathjax-full/js/input/tex/setoptions/SetOptionsConfiguration.js";
import "mathjax-full/js/input/tex/tagformat/TagFormatConfiguration.js";
import "mathjax-full/js/input/tex/textcomp/TextcompConfiguration.js";
import "mathjax-full/js/input/tex/textmacros/TextMacrosConfiguration.js";
import "mathjax-full/js/input/tex/unicode/UnicodeConfiguration.js";
import "mathjax-full/js/input/tex/upgreek/UpgreekConfiguration.js";
import "mathjax-full/js/input/tex/verb/VerbConfiguration.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const MathJax: any;
if (typeof MathJax !== "undefined" && MathJax.loader) {
  MathJax.loader.preLoad(
    "[tex]/base",
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
