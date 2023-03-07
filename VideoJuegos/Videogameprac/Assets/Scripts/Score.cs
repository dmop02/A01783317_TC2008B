using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Score : MonoBehaviour
{
    [SerializeField] TMP_Text tmpObj;
    [SerializeField] int maxScore;
    [SerializeField] createballs creator;
    int score;
    // Start is called before the first frame update
    void Start()
    {
        creator = GetComponent<createballs>();
        score = 0;
    }

    // Update is called once per frame
    public void AddPoints(int amount){
        score += amount;
        tmpObj.text = "Score: "+ score;
        Debug.Log("New Score" + score);
        if(score == maxScore){
            Finish();
        }
    }
    void Finish()
    {
        creator.StopBalls();
        tmpObj.text = "Game Over";
    }

}
