describe('Appium Test Example', () => {
    it('should click on Hello World button', async () => {
        await driver.launchApp()

        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.Button[1]').click()

        let message = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]').getText()

        expect(message).toBe('Hello World')

        // await driver.pause(1000)
    })
})


