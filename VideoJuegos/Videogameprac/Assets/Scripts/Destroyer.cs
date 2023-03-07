using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Destroyer : MonoBehaviour
{
    
    void OnCollisionEnter2D(Collision2D col)
    {
        GameObject obj = col.gameObject;
        if (obj.name == "Destroyer")
        {
            Destroy(col.gameObject);
        }
    }
}
