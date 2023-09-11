<?php

// read all role for system
function checkReadAllRole($object)
{
    $query = $object->readAllRole();
    checkQuery($query, "There's a problem processing your request. (read all role)");
    return $query;
}
