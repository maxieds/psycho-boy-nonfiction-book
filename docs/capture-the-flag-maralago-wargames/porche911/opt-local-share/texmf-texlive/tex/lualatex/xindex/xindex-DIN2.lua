-----------------------------------------------------------------------
--         FILE:  xindex-DIN2.lua
--  DESCRIPTION:  configuration file for xindex.lua
-- REQUIREMENTS:  
--       AUTHOR:  Herbert Voß
--      LICENSE:  LPPL1.3
--
-- $Id: xindex-DIN2.lua 19 2022-01-22 09:59:15Z hvoss $
-----------------------------------------------------------------------

if not modules then modules = { } end modules ['xindex-DIN2'] = {
      version = 0.35,
      comment = "configuration to xindex.lua",
       author = "Herbert Voss",
    copyright = "Herbert Voss",
      license = "LPPL 1.3"
}

--UCA language = "de_din2" -- 
if use_UCA then
languages.de = function(collator_obj)
  local function tailor(a, b, tbl) 
    local autf = collator_obj:string_to_codepoints(a)
    local butf = collator_obj:string_to_codepoints(b)
    collator_obj:tailor(autf,butf, tbl) 
  end
  local tailoring = function(s) collator_obj:tailor_string(s) end
  languages.de(collator_obj)
  tailoring "&Ö=Oe"
  tailoring "&ö=oe"
  tailoring "&Ä=Ae"
  tailoring "&ä=ae"
  tailoring "&Ü=Ue"
  tailoring "&ü=ue"
  tailoring "&ß=ss"
  return collator_obj
end
end
--[[
    Only used for -x option (no UCA):
    Each character's position in this array-like table determines its 'priority'.
    Several characters in the same slot have the same 'priority'.
]]
alphabet_lower = { --   for sorting
    { ' ' },  -- only for internal tests
    { 'a', 'á', 'à', 'å', 'æ', },
    { 'ae', 'ä'},
    { 'b' },
    { 'c', 'ç' },
    { 'd' },
    { 'e', 'é', 'è', 'ë', 'ê' },
    { 'f' },
    { 'g' },
    { 'h' },
    { 'i', 'í', 'ì', 'î', 'ï' },
    { 'j' },
    { 'k' },
    { 'l' },
    { 'm' },
    { 'n', 'ñ' },
    { 'o', 'ó', 'ò', 'ô', 'ø', 'œ', 'ø'},
    { 'oe', 'ö' },
    { 'p' },
    { 'q' },
    { 'r' },
    { 'ss', 'ß' },
    { 's', 'š' },
    { 't' },
    { 'u', 'ú', 'ù', 'û'},
    { 'ue', 'ü' },
    { 'v' },
    { 'w' },
    { 'x' },
    { 'y', 'ý', 'ÿ' },
    { 'z', 'ž' }
}
alphabet_upper = { -- for sorting
    { ' ' },
    { 'A', 'Á', 'À', 'Å', 'Æ', 'Â'},
    { 'AE', 'Ä'},
    { 'B' },
    { 'C', 'Ç' },
    { 'D' },
    { 'E', 'È', 'É', 'Ë', 'Ê' },
    { 'F' },
    { 'G' },
    { 'H' },
    { 'I', 'Í', 'Ì', 'Ï', 'Î' },
    { 'J' },
    { 'K' },
    { 'L' },
    { 'M' },
    { 'N', 'Ñ' },
    { 'O', 'Ó', 'Ò', 'Ø','Œ', 'Ø', 'Ô' },
    { 'OE', 'Ö' },
    { 'P' },
    { 'Q' },
    { 'R' },
    { 'S', 'Š' },
    { 'T' },
    { 'U', 'Ú', 'Ù', 'Û' },
    { 'UE', 'Ü' },
    { 'V' },
    { 'W' },
    { 'X' },
    { 'Y', 'Ý', 'Ÿ' },
    { 'Z', 'Ž' }
}
