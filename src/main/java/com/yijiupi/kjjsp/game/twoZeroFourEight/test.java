package com.yijiupi.kjjsp.game.twoZeroFourEight;

import java.util.Scanner;

/**
 * 测试类
 *
 * @author caohao 2018-04-11
 */
public class test {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int[][] str = new int[4][4];
        OnChange onChange = new OnChange(str);
        while (true) {
            onChange.pressKey(in.nextInt());
            str = OnChange.str;
            for (int i = 0; i < 4; i++) {
                for (int j = 0; j < 4; j++) {
                    System.out.print(str[i][j] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }

    }
}
