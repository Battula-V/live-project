<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Level1Categories;

class Level1CategoriesController extends Controller
{
    public function getLevel1Categories(){
        $data=Level1Categories::get();
        $totalrows=count($data);
        if($totalrows==0){
            return response()->json($data, 403);
        }
        else{
            return response()->json($data, 200);
        }
       
    }

    public function addLevel1Categories(Request $request){
        $output=null;
        // get data from outside
        $inputData=$request->all();

        if(array_key_exists("id",$inputData)){
            // update if id exist
            // get existing data from database table using id column
            $existingRecord=Level1Categories::find($inputData["id"]);
            if(array_key_exists("categoryName",$inputData)){
                // left-side must be table columns and right-side must be outside data
                $existingRecord->level1CategoryName=$inputData["categoryName"];
            }
            if(array_key_exists("status",$inputData)){
                $existingRecord->status=$inputData["status"];
            }
            // save existing record into database table and store the output in a variable
            $output=$existingRecord->save();
        }
        else{    
            //add if id doesn't exist 
            $output=Level1Categories::insert($inputData);
        }
        return response()->json($output, 200);
    }
    public function deleteLevel1Categories($id){
        $data=Level1Categories::destroy($id);

       return response()->json($data,200);
    }
}
