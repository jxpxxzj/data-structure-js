/*
Expr -> Expr + Term
      | Expr - Term
      | Term
Term -> Term * Factor
      | Term / Factor
      | Term % Factor
      | Term ^ Factor
      | Factor
Factor -> (Expr)
       | num

// Tail
Expr -> Term ExprTail
ExprTail -> + Term ExprTail
          | - Term ExprTail
          | null
Term -> Factor TermTail
TermTail -> * Factor TermTail
          | / Factor TermTail
          | % Factor TermTail
          | ^ Factor TermTail
          | null
Factor -> (Expr)
        | num
*/

