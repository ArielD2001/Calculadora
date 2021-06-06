class Display{
        constructor(displayValorAnterior, displayValorActual){
            this.displayValorActual = displayValorActual ;
            this.displayValorAnterior = displayValorAnterior;
            this.calculador = new Calculadora();
            this.operacionT=undefined;
            this.valorActual = '';
            this.valorAnterior  = '';
            this.signos = {
                sumar: '+',
                dividir: '/',
                multiplicar: 'x',
                restar: '-', 
            }   

        }
        borrar(){
            this.valorActual = this.valorActual.toString().slice(0,-1);
            this.imprimirVal();
        }
        borrarAll(){
            this.valorActual ='';
            this.valorAnterior ='';
            this.operacionT=undefined
            this.imprimirVal();
        }
        computar(tipo){
            this.operacionT !== 'igual' && this.calcular();
            this.operacionT = tipo;
            this.valorAnterior =this.valorActual || this.valorAnterior;
            this.valorActual='';
            this.imprimirVal();
        }
        agregarNum(numero){
            if(numero === '.' && this.valorActual.includes('.')) return
            this.valorActual = this.valorActual.toString() + numero.toString();
            this.imprimirVal(); 
        }
        imprimirVal(){
            this.displayValorActual.textContent = this.valorActual;
             this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operacionT] || ''}`;
        }
        calcular(){
            const valorAnterior = parseFloat(this.valorAnterior);
            const valorActual = parseFloat(this.valorActual);

            if(isNaN(valorActual) || isNaN(valorAnterior))return
            this.valorActual = this.calculador[this.operacionT](valorAnterior, valorActual); 

            
        }
        
}