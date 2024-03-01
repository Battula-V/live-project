<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Restaurant;

class RestaurantController extends Controller
{
    public function getRestaurants(){
        $data=Restaurant::get();
        $totalrows=count($data);
        if($totalrows==0){            
            return response()->json($data,403);
        }
        else{            
            return response()->json($data,200);
        }
    }
    public function addRestaurants(Request $request){
        $output=null;
        $inputData=$request->all();  
        if(array_key_exists("id",$inputData)){
            // update
            $existingRecord=Restaurant::find($inputData["id"]);
            // left-side columns
            if(array_key_exists("SNo",$inputData)){
                $existingRecord->SNO=$inputData["SNo"];
            }
            if(array_key_exists("name",$inputData)){
                $existingRecord->name=$inputData["name"];
            }
            if(array_key_exists("phoneNumber",$inputData)){
                $existingRecord->phoneNumber=$inputData["phoneNumber"];
            }
            if(array_key_exists( "email",$inputData)){
                $existingRecord->email=$inputData[ "email"];
            }
            if(array_key_exists("address",$inputData)){
                $existingRecord->address=$inputData["address"];
            }
            if(array_key_exists("area",$inputData)){
                $existingRecord->area=$inputData["area"];
            }
            if(array_key_exists("status",$inputData)){
                $existingRecord->status=$inputData["status"];
            }
            if(array_key_exists("deleted",$inputData)){
                $existingRecord->deleted=$inputData["deleted"];
            }
            // save record
            $output=$existingRecord->save();
        }
        else{   
            //add  
            $output=restaurant::insert($inputData);
        }  
        return response()->json($output,200);
    }
    public function deleteRestaurants($id ){
        $data=Restaurant::destroy($id);
        return response()->json($data,200);
    }
}
