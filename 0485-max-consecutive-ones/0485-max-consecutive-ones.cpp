class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int count = 0;
        int largest = 0;

        for(int i = 0;i<nums.size();i+=1) {
            if(nums[i] == 1) {
                count ++;
                
            }
            else {
                largest = max(count , largest);
                count = 0;
            }
        }
        return max(largest , count );
    }
};