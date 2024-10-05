#include<bits/stdc++.h>

using namespace std;

float N, i_vec, M, sum, average;
vector<float> v;

int main() {
	
	cin >> N;

	for (int i = 0; i < N; i++) {
		cin >> i_vec;
		v.push_back(i_vec);
	}
	for (int i = 0; i < v.size(); i++) {
		M = max(M, v[i]);
	}
	sum = accumulate(v.begin(), v.end(), 0);
	average = ((sum / M ) * 100 )/ N;
	cout << average;
}