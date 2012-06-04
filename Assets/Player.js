#pragma strict

var rayDis : float = 100;

function Start () {

}

function Update () {
	var front = transform.TransformDirection(Vector3.forward);
	//Debug.DrawLine(transform.position, transform.position+front*2.0, Color.red);
	var hit : RaycastHit;
	if (Physics.Raycast(transform.position, front, hit, rayDis)) {
		Debug.DrawLine(transform.position, hit.point, Color.red);
	}
	
	var rotY = Input.GetAxis("Horizontal") * Time.deltaTime * 40.0;
	transform.Rotate(Vector3(0, rotY, 0));
}