class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        int actualSum = n*(n+1)/2;
        int arraySum = 0;
        for(int i = 0;i<nums.size();i+=1) {
            arraySum += nums[i];
        }
        return actualSum - arraySum ;
        }
};