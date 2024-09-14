    // Função de adição 
        function add(a, b) {
           return a + b; 
         }

    // Função de subtrao
        function subtract(a, b) {
          return a - b;
        }

    // Função de multiplicação
        function multiply(a, b) {
          return a * b;
        }    
 

    // Função de divisão
        function divide(a, b) {
          if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
            }
          return a / b;
         }

    // Função de potenciação
     function power(base, exponent) {   
      return Math.pow(base, exponent); 
    } 


    // Exportar as funçes    
       module.exports = { 
        add 
        subtract 
        multiply 
        divide
        power 
    };     

