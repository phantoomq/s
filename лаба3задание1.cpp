#include <iostream>
using namespace std;

int main() {
    setlocale(LC_ALL, "ru");
     double a1, b1, a2, b2;

        cin >> a1 >> b1;
        cin >> a2 >> b2;

        double i1 = a1 / b1;
        double i2 = a2 / b2;

        if (i1 < i2)
            cout << "Меньший ток в первом";
        if (i2 < i1)
            cout << "Меньший ток во втором";
        if (i1 == i2)
            cout << "Токи равны";
}