package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        hola(5,4);
    }


    public static void hola(double x, double y){
        if (x>y){
            System.out.print(x/y);
        }
        if (x<y){
            System.out.print(x*y);
        }
        if (x==y){
            System.out.print(x+y);
        }
    }

}
