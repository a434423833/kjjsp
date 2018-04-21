package com.yijiupi.kjjsp.game.twoZeroFourEight;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * 改变事件
 *
 * @author caohao 2018-04-11
 */
public class OnChange {
    /**
     * 显示数组 4X4
     */
    public int[][] str = new int[4][4];
    /**
     * 游戏是否失败 false:失败
     */
    public Boolean bl = true;
    /**
     * 当期分数
     */
    public int grade = 0;

    public OnChange() {
        getNewValue();
        getNewValue();
    }

    public OnChange(int[][] change) {
        str = change;
    }

    public void pressKey(int number) {
        switch (number) {
            case 38:
                upPress();
                break;
            case 40:
                downPress();
                break;
            case 37:
                leftPress();
                break;
            case 39:
                rightPress();
                break;
            default:
                return;
        }
        getNewValue();
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                if (grade < str[i][j]) {
                    grade = str[i][j];
                }
            }
        }

    }

    /**
     * 随机获得新的方块
     */
    private void getNewValue() {
        //生成位置
        int num = 0;
        //生成大小
        int size = 2;
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                if (str[i][j] == 0) {
                    num++;
                }
            }
        }
        //无法生成方块 游戏失败
        if (num == 0) {
            bl = false;
            return;
        }
        //获得生成位置的随机数
        num = new Random().nextInt(num) + 1;
        //五分之一的几率生成4方块
        if (new Random().nextInt(10) + 1 == 5) {
            size = 4;
        }
        //给空白处生成方块
        for (int i = 0; i < str.length; i++) {
            for (int j = 0; j < str.length; j++) {
                if (str[i][j] == 0) {
                    num--;
                    if (num == 0) {
                        str[i][j] = size;
                    }
                }
            }
        }
    }

    /**
     * 按上
     */
    private void upPress() {
        for (int x = 0; x < str.length; x++) {
            int[] change = changeStr(str[0][x], str[1][x], str[2][x], str[3][x]);
            for (int i = 0; i < 4; i++) {
                str[i][x] = change[i];
            }
        }
    }

    /**
     * 按下
     */
    private void downPress() {
        for (int x = 0; x < str.length; x++) {
            int[] change = changeStr(str[3][x], str[2][x], str[1][x], str[0][x]);
            for (int i = 3; i >= 0; i--) {
                str[i][x] = change[3 - i];
            }
        }

    }

    /**
     * 按左
     */
    private void leftPress() {
        for (int y = 0; y < str.length; y++) {
            int[] change = changeStr(str[y][0], str[y][1], str[y][2], str[y][3]);
            for (int i = 0; i < 4; i++) {
                str[y][i] = change[i];
            }
        }

    }

    /**
     * 按右
     */
    private void rightPress() {
        for (int y = 0; y < str.length; y++) {
            int[] change = changeStr(str[y][3], str[y][2], str[y][1], str[y][0]);
            for (int i = 3; i >= 0; i--) {
                str[y][i] = change[3 - i];
            }
        }

    }

    /**
     * 对每一排的进行操作
     *
     * @param a,b,c,d
     * @return
     */
    private int[] changeStr(int a, int b, int c, int d) {
        int[] change = getList(a, b, c, d);
        /*每次操作完之后，验证是否还存在相邻相同的
        while ((change[0] == change[1] && change[0] != 0) || (change[1] == change[2] && change[1] != 0) || (change[2] == change[3] && change[2] != 0)) {
            //当第一个值与第二个值相等，并且互相不为0时，进行缩进
            while (change[0] == change[1] && change[0] != 0) {
                change[0] *= 2;
                change[1] = change[2];
                change[2] = change[3];
                change[3] = 0;
            }
            while (change[1] == change[2] && change[1] != 0) {
                change[1] *= 2;
                change[2] = change[3];
                change[3] = 0;
            }
            while (change[2] == change[3] && change[2] != 0) {
                change[2] *= 2;
                change[3] = 0;
            }
        }*/
        //a与b相同时
        if (change[0] == change[1] && change[0] != 0) {
            change[0] *= 2;
            //判断此时c和d是否可以合成
            if (change[2] == change[3] && change[2] != 0) {
                //此时ab和cd同时合成
                change[1] = change[2] * 2;
                change[2] = 0;
                change[3] = 0;
            } else {
                //此时只合成ab
                change[1] = change[2];
                change[2] = change[3];
                change[3] = 0;
            }
        }
        //a与b不同(a,b不为0)并且b与c相同
        if ((change[0] != change[1] || change[0] == 0) && change[1] == change[2] && change[1] != 0) {
            change[1] *= 2;
            change[2] = change[3];
            change[3] = 0;
        }
        //a与b不同(a,b不为0) b与c不同(b,c不为0) c与d相同
        if ((change[0] != change[1] || change[0] == 0) && (change[1] != change[2] || change[1] == 0) && change[2] == change[3] && change[3] != 0) {
            change[2] *= 2;
            change[3] = 0;
        }
        return change;
    }

    /**
     * 获得缩进后的数组,将中间的空白去掉2,0,0,2 -  2,2,0,0
     *
     * @return
     */
    private int[] getList(int a, int b, int c, int d) {
        int[] change = new int[4];
        List<Integer> list = new ArrayList<>();
        if (a != 0) {
            list.add(a);
        }
        if (b != 0) {
            list.add(b);
        }
        if (c != 0) {
            list.add(c);
        }
        if (d != 0) {
            list.add(d);
        }
        for (int i = 0; i < list.size(); i++) {
            change[i] = list.get(i);
        }
        //其余的自动补0
        return change;
    }

}
