
const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalizeWords", () => {

    it("capitalizes the first letter of each word", () => {

        const helloWorld = "hello world"

        const capitalizeTitle = capitalizeWords(helloWorld)

        expect(capitalizeTitle).toBe("Hello World")

    });

    it("captalizes words, even with speacial characters(ie: !@#$%-_)", () => {

        const helloWorld = "hello-world"

        const capitalizeTitle = capitalizeWords(helloWorld)

        expect(capitalizeTitle).toBe("Hello-World")

    });

    it("returns an empty string", () => {

        const helloWorld = ""

        const capitalizeTitle = capitalizeWords(helloWorld)

        expect(capitalizeTitle).toBe("")

    });

})

describe("filterActiveUsers", () => {

    it("filters users that are active", () => {

        const users = [
            { name: "Alice", isActive: true },
            { name: "Bob", isActive: false },
        ]

        const activeUsers = filterActiveUsers(users)

        expect(activeUsers).toEqual([{ name: 'Alice', isActive: true }])

    });

    it("filters users that are active with mixed active/inactive users", () => {

        const users = [
            { name: "Alice", isActive: true },
            { name: "Bob", isActive: false },
            { name: "Joe", isActive: true },
            { name: "Sarah", isActive: false },
            { name: "Link", isActive: true },
            { name: "Rhett", isActive: true }
        ]

        const activeUsers = filterActiveUsers(users)

        expect(activeUsers).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Joe', isActive: true },
            { name: 'Link', isActive: true },
            { name: 'Rhett', isActive: true }
        ])

    });

    it("returns empty array if all users are inactive", () => {

        const users = [
            { name: "Bob", isActive: false },
            { name: "Sarah", isActive: false }
        ]

        const activeUsers = filterActiveUsers(users)

        expect(activeUsers).toEqual([])

    });

    it("returns empty array if given an empty array", () => {

        const users = []

        const activeUsers = filterActiveUsers(users)

        expect(activeUsers).toEqual([])

    });

})

describe("logAction", () => {

    it("returns users login action", () => {

        const userAction = "login"
        const userName = "Alice"
        const timestamp = new Date().toISOString()

        const userLogAction = logAction(userAction, userName)

        expect(userLogAction).toBe(`User ${userName} performed ${userAction} at ${timestamp}`)

    });

    it("missing Action", () => {

        const userAction = ""
        const userName = "Alice"
        const timestamp = new Date().toISOString()

        const userLogAction = logAction(userAction, userName)

        expect(userLogAction).toBe(`User ${userName} performed ${userAction} at ${timestamp}`)

    });

    it("missing username", () => {

        const userAction = "login"
        const userName = ""
        const timestamp = new Date().toISOString()

        const userLogAction = logAction(userAction, userName)

        expect(userLogAction).toBe(`User ${userName} performed ${userAction} at ${timestamp}`)

    });

        it("missing action and username", () => {

        const userAction = ""
        const userName = ""
        const timestamp = new Date().toISOString()

        const userLogAction = logAction(userAction, userName)

        expect(userLogAction).toBe(`User ${userName} performed ${userAction} at ${timestamp}`)

    });

})