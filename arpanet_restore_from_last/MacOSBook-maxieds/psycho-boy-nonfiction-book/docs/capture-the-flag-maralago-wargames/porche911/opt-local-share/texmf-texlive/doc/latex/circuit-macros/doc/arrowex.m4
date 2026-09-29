.PS
# arrowex.m4
# https://tex.stackexchange.com/questions/727004/how-do-i-create-hook-arrows-in-tikz-diagram-instead-of-plain-arrows
gen_init

  movewid = 1
  moveht = 12bp__

  ifdpic(
   `{{ arrow -> 0 }; move; "\tt arrow -> 0" ljust }
    move down_; right_
    {{ arrow -> 1 }; move; "{\tt arrow -> 1} (default)" ljust }
    move down_; right_
    {{ arrow -> 3 }; move; "\tt arrow -> 3" ljust } ',
   `{{arrowhead = 0; arrow}; move; "\tt arrowhead = 0; arrow" ljust }
    move down_; right_
    {{arrowhead = 1; arrow}; move
      "{\tt arrowhead = 1; arrow} (default)" ljust } ')

  move down_; right_
  arrowwid = 8bp__; arrowht = 10bp__
  {{ sarrow(,type=Plain)}; move;
   {"`\tt arrowwid=8bp\_\_; arrowht=10bp\_\_; sarrow(,type=Plain)'" ljust }}
  move down_; right_
  {{ sarrow(,type=PP;hook=R;)}; move;
   {"`\tt sarrow(,type=PP;hook=R;)'" ljust }}
  move down_; right_
  {{ sarrow(,type=Open)}; move;
   {"`\tt sarrow(,type=Open)'" ljust }}
  move down_; right_
  {{ sarrow(,type=DI;head=colored "blue")}; move;
   {"`\tt sarrow(,type=DI;head=colored \"blue\")'" ljust }}
  move down_; right_
  {{ sarrow(,type=Open;head=fill_(0))}; move;
   {"`\tt sarrow(,type=Open;head=fill\_(0))'" ljust }}
  move down_; right_
  {{ sarrow(,type=Crow;shaft=dashed)}; move
   {"`\tt sarrow(,type=Crow;shaft=dashed)'" ljust }}
  move down_; right_
  {{ sarrow(,type=Diamond;head=shaded "red";lgth=16bp__)}; move
   {"`\tt sarrow(,type=Diamond;head=shaded \"red\";lgth=16bp\_\_)'" ljust }}

.PE
