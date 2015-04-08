import java.util.ArrayList;
import java.util.Arrays;

public class BubbleSort {

    
    public static ArrayList<Integer> BubbleSort(ArrayList<Integer> list) {

        int LENGTH = list.size();
        ArrayList<Integer> final_list = new ArrayList<Integer>();

        // Base case if list is length of 1 or 0 return the list
        if (LENGTH == 0 || LENGTH == 1) {
            return list;
        }

        // check to see if the list needs to be sorted again
        boolean rerun = false;
        
        for (int i=0; i<LENGTH-1; i++) {
            int left = list.get(i);
            int right = list.get(i+1);
            // Check if the left value is greater than the right
            if (left > right) {
               // switch places in the array  
               list.set(i,right);
               list.set(i+1,left);
               rerun = true;
            }
        }
        
        // System.out.println(list.toString());
        if ( rerun == true ) {
            ArrayList<Integer> temp = new ArrayList<Integer>(list.subList(0, LENGTH-1));
            final_list.addAll(BubbleSort(temp)) ;
            final_list.add(list.get(LENGTH-1));
        } else 
            final_list = list;

        return final_list;
    }

    public static void main(String [] args) {
        ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(5,7,1,2,8,3,4,9,6));
        ArrayList<Integer> output = BubbleSort(list);

        System.out.println(output.toString());
    }
}
