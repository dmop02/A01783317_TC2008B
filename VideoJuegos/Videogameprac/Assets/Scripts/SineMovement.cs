using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SineMovement : MonoBehaviour
{
    [SerializeField] float amplitude;
    [SerializeField] float speed;

    Vector3 initialPos;
    Vector3 offset;
    float angle;

    // Start is called before the first frame update
    void Start()
    {
        initialPos = transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        angle += speed * Time.deltaTime;
        offset = new Vector3(Mathf.Sin(angle)* amplitude, 0,0);
        transform.position = initialPos + offset;
    }
}
