// λx.(λy.Add x y)(One)(Two)
(x => y => Add(x)(y))(1)(2);