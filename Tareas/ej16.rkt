#lang racket
(require racket/trace)
(provide average-tail binary-tail)
;; Funcion que recibe una lista de numeros lst y devuelve la media aritmetica de los elementos dentro de lst
;; o 0 si lst esta vacio
(define(average-tail lst)
    (trace-let loop
        ([lst lst]
        [res 0]
        [a 0])
        (if (empty? lst)
            (/ res  a)
           (loop (cdr lst) (+ (car lst) res) (+ 1 a)))))

;;Funcion binaria que recibe un entero n como entrada
;; si n = 0, devulve una lista vacia
;;si n > 0 devulve una lista de 0 y 1 equivalente a la representacion binaria de n
(define(binary-tail n)
    (define (loop n res)
        (if (= n 0)
        res
           (loop  (quotient n 2)(cons (remainder n 2) res))))
            (loop n '()))
