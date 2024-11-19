class Solution {
public:
    int missingNumber(vector<int>& nums) {
        for(int i =0;i<nums.size();i+=1) {
            cout << nums[i] << " " <<endl;
        }
        int n = nums.size();
        int actualSum = 0;
        int arraySum = 0;
        actualSum = n*(n+1) / 2;
        for(int i = 0;i<nums.size();i+=1) {
            arraySum += nums[i];
        }
        cout << "Actual -- " << actualSum << endl;
        cout << "array " << arraySum << endl;
        cout<<"diff " << actualSum - arraySum << endl;  
        return actualSum - arraySum;
    }
};