var documenterSearchIndex = {"docs":
[{"location":"#Aqua.jl-1","page":"Home","title":"Aqua.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Modules = [Aqua]\nPrivate = false","category":"page"},{"location":"#Aqua.Aqua","page":"Home","title":"Aqua.Aqua","text":"Aqua.jl: Auto QUality Assurance for Julia packages\n\n(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Codecov) (Image: Coveralls) (Image: GitHub commits since tagged version) (Image: Aqua QA)\n\nAqua.jl provides functions to run a few automatable checks for Julia packages:\n\nThere are no method ambiguities.\nThere are no undefined exports.\nThere are no unbound type parameters.\n\nQuick usage\n\nCall Aqua.test_all(YourPackage) from test/runtests.jl, e.g.,\n\nusing YourPackage\nusing Aqua\nAqua.test_all(YourPackage)\n\nSee more in the documentation.\n\n\n\n\n\n","category":"module"},{"location":"#","page":"Home","title":"Home","text":"Modules = [Aqua]\nPublic = false\nFilter = t -> startswith(String(nameof(t)), \"test_\")","category":"page"},{"location":"#Aqua.test_all-Tuple{Module}","page":"Home","title":"Aqua.test_all","text":"test_all(testtarget::Module)\n\nRun following tests in isolated testset:\n\ntest_ambiguities\ntest_unbound_args\ntest_undefined_exports\n\n\n\n\n\n","category":"method"},{"location":"#Aqua.test_ambiguities-Tuple{Any}","page":"Home","title":"Aqua.test_ambiguities","text":"test_ambiguities(package::Module)\ntest_ambiguities(packages::Vector{Symbol})\n\nTest that there is no method ambiguities in given package(s).  It calls Test.detect_ambiguities in a separated clean process to avoid false-positive.\n\n\n\n\n\n","category":"method"},{"location":"#Aqua.test_unbound_args-Tuple{Module}","page":"Home","title":"Aqua.test_unbound_args","text":"test_unbound_args(module::Module)\n\nTest that all methods in module and its submodules do not have unbound type parameter.\n\n\n\n\n\n","category":"method"},{"location":"#Aqua.test_undefined_exports-Tuple{Module}","page":"Home","title":"Aqua.test_undefined_exports","text":"test_undefined_exports(module::Module)\n\nTest that all exported names in module actually exist.\n\n\n\n\n\n","category":"method"},{"location":"internals/#Internals-1","page":"Internals","title":"Internals","text":"","category":"section"},{"location":"internals/#","page":"Internals","title":"Internals","text":"Modules = [Aqua]\nPublic = false\nFilter = t -> !startswith(String(nameof(t)), \"test_\")","category":"page"},{"location":"internals/#Aqua.undefined_exports-Tuple{Module}","page":"Internals","title":"Aqua.undefined_exports","text":"undefined_exports(m::Module) :: Vector{Symbol}\n\n\n\n\n\n","category":"method"}]
}
