'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;

}

BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value) {
      // es menor
        if (this.left) {
          //tengo algo a la izquierda
         this.left.insert = new BinarySearchTree(value);  
      } 
      else {
         this.left = new BinarySearchTree(value);
         return value;
      }
    } else {
      // es mayor
      if (this.right) {
         //tengo algo a la izquierda
        this.right.insert = new BinarySearchTree(value);  
     } 
     else {
        this.right = new BinarySearchTree(value);
        return value; 
    }

   }
};


const miArbolito = new BinarySearchTree(8);
console.log(miArbolito);

BinarySearchTree.prototype.contains = function (value) {
     if (this.value === value) return true;
// Tengo algo a la izquierda y el valor esta a la izquierda ?
     if(this.left && this.left.contains(value)) return true;
// Tengo algo a la derecha y el valor esta a la derecha ?
     if(this.right && this.right.contains(value)) return true;
     return false;
};

BinarySearchTree.prototype.size = function (value) {
   let count = 1;
   if(this.left){
      count += this.left.size();
   }
   if(this.right){
      count += this.right.size();
   }
   return count;
};
BinarySearchTree.prototype.depthFirstForEach = function (cb, type) {
   switch(type) {

      case "pre-order":
         cb(this.value);
         if console
         //nodo
         //izquierda
         //derecha

         break;

      case "post-order":     
         //izquierda
         //derecha
         //nodo
         
         break;
      
      default:
         //izquierda
         //nodo
         //derecha
         
      break;


   }
   //in order (caso por default)
   //post order
   //
};


BinarySearchTree.prototype.breadthFirstForEach = function (cb,queue) {
   if(!queue) {
      var queue = [];
   }

};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};

