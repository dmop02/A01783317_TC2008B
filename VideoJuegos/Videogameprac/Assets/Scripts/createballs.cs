using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class createballs : MonoBehaviour
{
    //Class variable to be changed from the Unity interface
    [SerializeField] GameObject ball;
    [SerializeField] float delay;

    // Start is called before the first frame update
    void Start()
    {
        // Call the Dropball function every 0.5 seconds
        // and then keep calling it every set time
        InvokeRepeating("Dropball", 0.5f, delay);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    void Dropball(){
        // Generate a new random position
        Vector3 pos = new Vector3(Random.Range(-10.0f, 10.0f),6,0);
        //Create copy of prefab 
        GameObject obj = Instantiate(ball, pos, Quaternion.identity);
        //Boom object after certain period of time (This case 5 sec)
        //Destroy(obj, 5);
    }
    public void StopBalls(){
        CancelInvoke("Dropball");
    }
}
