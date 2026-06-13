local ZERO_WD_SP = pandoc.RawInline('context', '\\hskip0pt ')

local function set_break_points(code)
  local raw_code = code.text
  local broken_code = {}
  for a, b in string.gmatch(raw_code, '([^a-zA-Z\\]?)([A-Z\\]?[a-z.]*)') do
    if a ~= '' then
      table.insert(broken_code, ZERO_WD_SP)
      table.insert(broken_code, pandoc.Code(a)) 
    end
    if b ~= '' then
      table.insert(broken_code, ZERO_WD_SP)
      table.insert(broken_code, pandoc.Code(b))
    end
  end
  return broken_code
end

local function has_one_of(s, string_table)
  for i = 1, #string_table do
    if string.match(s, string_table[i]) then
      return string_table[i]
    end
  end
  return false
end

local function logos(str)
  local s = str.text
  -- 'TeX' must be included last because it is contained in the other names.
  local match = has_one_of(s, { 'LaTeX', 'ConTeXt', 'TeX' })
  if match then
    local pre, logo, post = string.match(s, '^(.*)(' .. match .. ')(.*)$')
    local to_return = {}
    if pre then table.insert(to_return, pandoc.Str(pre)) end
    table.insert(to_return, pandoc.RawInline('context', '\\' .. logo .. '{}'))
    if post then table.insert(to_return, pandoc.Str(post)) end
    return to_return
  end
end

return {
  { Code = set_break_points },
  { Str = logos }
}
