import java.util.ArrayList;
import java.util.Arrays;

public class QuickSort {

    public static ArrayList<Integer> QuickSort(ArrayList<Integer> list) {

        System.out.println(list.toString());

        // Base Case: when the list size is at length 1 
        int LENGTH = list.size();
        // System.out.println(Integer.toString(LENGTH));

        if( LENGTH == 1 || LENGTH == 0) {
            return list;
        } else {
            int pivot = list.get(LENGTH-1);
            // If list has size greater than 1
            // Create 2 array lists
            ArrayList<Integer> left_wall = new ArrayList<Integer>();
            ArrayList<Integer> right_wall = new ArrayList<Integer>();

            for (int i = 0; i < LENGTH; i++) {
                // the pivot is the comparison point for each element in array
                int current_element = list.get(i);
                // if current element is bigger than the pivot add to the right
                if (current_element > pivot)
                    right_wall.add(current_element);
                // every other value will go to the left wall
                else if (current_element < pivot) 
                    left_wall.add(current_element);			
            }

            // System.out.println(right_wall.toString());
            // System.out.println(left_wall.toString());
            ArrayList<Integer> final_list = QuickSort(left_wall);
            final_list.add(pivot);
            final_list.addAll(QuickSort(right_wall));

            // recursive call for each sub array created
            // return final_list;
            return final_list;
        }
    }

    public static void main(String [] args) {

        ArrayList<Integer> array = new ArrayList<Integer>(Arrays.asList(5, 8, 1, 3, 2, 0, 9, 7, 4, 6));
        ArrayList<Integer> output = QuickSort(array);

        System.out.println(output.toString());
    }	
}
