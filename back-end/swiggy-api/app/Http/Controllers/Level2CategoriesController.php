<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Level2Categories;

class Level2CategoriesController extends Controller
{
    public function getlevel2Categories(){
        $data=Level2Categories::get();
        $totalrows=count($data);
        if($totalrows==0){
            return response()->json($data,403);
        }
        else{
            return response()->json($data,200);
        }
    }
    
    public function addLevel2Categories(Request $request){
        $output=null;
        // get data from outside
        $inputData=$request->all();

        if(array_key_exists("id",$inputData)){
            // update if id exist
            // get existing data from database table using id column
            $existingRecord=Level1Categories::find($inputData["id"]);
            if(array_key_exists("level1CategoryId",$inputData)){
                // left-side must be table columns and right-side must be outside data
                $existingRecord->level1CategoryName=$inputData["level1CategoryId"];
            }
            if(array_key_exists("level2CategoryName",$inputData)){
                // left-side must be table columns and right-side must be outside data
                $existingRecord->level1CategoryName=$inputData["level2CategoryName"];
            }
            if(array_key_exists("status",$inputData)){
                $existingRecord->status=$inputData["status"];
            }
            // save existing record into database table and store the output in a variable
            $output=$existingRecord->save();
        }
        else{    
            //add if id doesn't exist 
            $output=Level2Categories::insert($inputData);
        }
        return response()->json($output, 200);
    }
    public function deleteLevel2Categories($id){
        $data=Level2Categories::destroy($id);
        return response()->json($data,200);
    }
}
