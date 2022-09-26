<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Staff extends Model
{
    use HasFactory;

    protected int $id;
    protected string $name;

    function getAllStaffs() : array
    {
        return DB::select('select * from staff');
    }

    function insertAStaff($data): bool
    {
        return DB::insert('insert into staff(name) values (?)', [$data]);
    }

    function getName($id): array
    {
        return DB::select('select name from staff where id = ?', [$id]);
    }

    function fireStaff($id) {
        DB::delete('delete from staff where id = ?', [$id]);
    }

    function updateStaff($id, $name) {
        DB::update('update staff set name = ? where id = ?', [$name, $id]);
    }
}
