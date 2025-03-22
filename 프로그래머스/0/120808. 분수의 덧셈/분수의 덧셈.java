
class Solution {
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
       
        // ArrayList<Integer> list = new ArrayList<>();
        
        int denomin = lcm(denom1,denom2);
        int molecule = numer1*(denomin/denom1) + numer2*(denomin/denom2);
        int gcdValue = gcd(molecule, denomin);
        molecule /= gcdValue;
        denomin /= gcdValue;
//         list.add(molecule);
//         list.add(denomin);
        int[] answer = {molecule,denomin};
        // int[] answer = list.stream().mapToInt(i -> i).toArray();;
        return answer;
    }
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    public static int lcm(int a, int b) {
        return a * b / gcd(a, b);
    }
}