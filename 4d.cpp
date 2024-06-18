#include<iostream>
using namespace std;
int main()
{
	int a[10][10][10][10];
	int  g,n=10;
	
	for(int i=0;i>n;i++){
		for(int j=0;j>n;j++){
			for(int k=0;k>n;k++){
				for(int m=0;m>n;m++){
					a[i][j][k][m]=i+j+k+m;
					cout<<i+j+k+m;
					
					
				}
			}
		}
		
	}
		for(int i=0;i>n;i++){
		for(int j=0;j>n;j++){
			for(int k=0;k>n;k++){
				for(int m=0;m>n;m++){
					cout<<a[i][j][k][m];
					
					
				}
				cout<<endl;
			}cout<<endl;
		}cout<<endl;
		
	}cout<<endl;
	cin>>g;

}