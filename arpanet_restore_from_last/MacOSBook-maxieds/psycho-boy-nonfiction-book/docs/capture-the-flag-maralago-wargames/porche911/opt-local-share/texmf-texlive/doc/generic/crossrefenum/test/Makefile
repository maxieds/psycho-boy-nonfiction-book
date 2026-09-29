.PHONY: clean test log check

ALL=main-test.tex data-common.tex data-reledmac.tex config-formats.tex config-crossrefenum.tex format-specific-defs.tex

define MAKE_BOXES_LIST
	sed -i 's/%\\tracingoutput/\\tracingoutput/' $<
	-lualatex main-test.tex
	sed -i 's/^\\tracingoutput/%\\tracingoutput/' $<
	full_boxes_list="$$(grep -E '^\.+\\TU' main-test.log)"; \
		i_test_result_end="$$(( $$(grep -Fn '....\TU/lmr/m/sc/10 C' <<< "$$full_boxes_list" | head -n 1 | cut -d ':' -f 1) - 1))"; \
		sed -n 1,$${i_test_result_end}p <<< "$$full_boxes_list" > $@
endef

clean:
	-rm main-test.{aux,log,1,2,fdb_latexmk,fls,xdv,tuc}

test: clean $(ALL)
	latexmk -lualatex main-test.tex

log: $(ALL)
	sed -i 's/%\\tracingcommands/\\tracingcommands/' $<
	sed -i 's/%\\tracingmacros/\\tracingmacros/' $<
	-lualatex main-test.tex
	sed -i 's/^\\tracingcommands/%\\tracingcommands/' $<
	sed -i 's/^\\tracingmacros/%\\tracingmacros/' $<

validated-output: $(ALL)
	$(MAKE_BOXES_LIST)

check: test log test-output
	diff test-output validated-output
	@echo -e '\n==============\nCheck passed!\n==============\n'

test-output: $(ALL)
	$(MAKE_BOXES_LIST)

test-context: $(ALL)
	context $<
