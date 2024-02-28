<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Http\Response;
use App\Models\Location;
class LocationController extends Controller
{
    public function getLocations(){
        $data=Location::get();
        $totalrows=count($data);
        if($totalrows==0){
            return response()->json($data, 403);
        }
        else{
            return response()->json($data, 200);
        }
       
    }
    public function addLocations(Request $request){
        $output=null;
        $inputData=$request->all();
        if(array_key_exists("id",$inputData)){
            // update
            $existingRecord=Location::find($inputData["id"]);
            if(array_key_exists( "address",$inputData)){
                // lift-side table columns and right-side out-side data
                $existingRecord->address=$inputData["address"];
            }
            if(array_key_exists(  "country",$inputData)){
                $existingRecord->country=$inputData["country"];
            }
            if(array_key_exists( "district",$inputData)){
                $existingRecord->district=$inputData["district"];
            }
            if(array_key_exists( "state",$inputData)){
                $existingRecord->state=$inputData[ "state"];
            }
            // save existing record
                $output=$existingRecord->save();
        }
        else{ 
            //add    
            $output=Location::insert($inputData);
        }
        return response()->json($output, 200);
    }

   

}
