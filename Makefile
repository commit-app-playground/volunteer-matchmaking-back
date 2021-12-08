# Creates (or updates) secrets object on the k8s cluster server
upsert-secrets:
	kubectl apply -n volunteer-matchmaking-back -f secrets/secrets.yml
