def main(dict):
    name = dict.get("name", "Bob")
    return {"message": "Hello %s" % name }