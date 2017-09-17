/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */
 
"use strict";

function add(mx,my){
    var result=[];
    result=new Array(mx.length);
    for(var i=0; i<result.length; i++){
        result[i]=new Array(mx[i].length);
        for(var j=0; j<result[i].length; j++){
            result[i][j]=mx[i][j]+my[i][j];
        }
    }
    return result;
}

function substract(mx,my){
    var result=[];
    result=new Array(mx.length);
    for(var i=0; i<result.length; i++){
        result[i]=new Array(mx[i].length);
        for(var j=0; j<result[i].length; j++){
            result[i][j]=mx[i][j]-my[i][j];
        }
    }
    return result;
}
function multiply(mx,my){
    var result=[];
    result=new Array(mx.length);
    for(var i=0; i<result.length; i++){
        result[i]=new Array(mx[i].length);
        for(var j=0; j<result[i].length; j++){
            result[i][j]=mx[i][j]*my[i][j];
        }
    }
    return result;
}
function display(){}
