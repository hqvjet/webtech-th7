<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Staff;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function getAllStaff(Staff $s): array
    {
        return $s->getAllStaffs();
    }

    function insertAStaff(Staff $s, Request $req): bool
    {
        return $s->insertAStaff($req->input('name'));
    }

    function getName(Staff $s, $id): array
    {
        return $s->getName($id);
    }

    function fireStaff(Staff $s, Request $req) {
        $s->fireStaff($req->input('id'));
    }

    function updateStaff(Staff $s, Request $req) {
        $s->updateStaff($req->input('id'), $req->input('newName'));
    }
}
