// Added in Serializable to cope with errors

using UnityEngine;
using System;

[Serializable]
public class SceneManagerScript : MonoBehaviour
{
    public GameObject[] contentObjects;

    private int currentIndex = 0;
    [Serializable]
    private void Start()
    {
        // Ensure only the first content is active at start
        UpdateSceneVisibility();
    }
    [Serializable]
    public void ShowNextContent()
    {
        if (currentIndex + 1 < contentObjects.Length)
        {
            currentIndex++;
            UpdateSceneVisibility();
        }
    }
    [Serializable]
    public void ShowPreviousContent()
    {
        if (currentIndex > 0)
        {
            currentIndex--;
            UpdateSceneVisibility();
        }
    }

    [Serializable]
    private void UpdateSceneVisibility()
    {
        for (int i = 0; i < contentObjects.Length; i++)
        {
            contentObjects[i].SetActive(i == currentIndex);
        }
    }
}
