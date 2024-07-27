function findsum()
		{
			event.preventDefault();
			let num = document.getElementById("num");
			let ans = document.getElementById("ans");

			let action = document.activeElement.value;
			let n = parseInt(num.value);
		
			if(action == "M1")
			{
				let i=1; sum=0.0;
				while(i <= n)
				{
					sum = sum+i;
					i++;
				}
				let msg = "Sum1: "+sum;
				ans.innerHTML = msg;
			}
			else if(action == "M2")
			{
				let i=1; sum=0.0;
				do
				{
					sum += i;
					i++;
				}while(i<=n);
				let msg = "Sum2: "+sum;
				ans.innerHTML = msg;
			}
			else
			{
				let i; sum=0.0;
				for(i=1 ; i<=n ; i++)
				{
					sum += i;
				}
				let msg = "Sum3: "+sum;
				ans.innerHTML = msg;
			}
		}